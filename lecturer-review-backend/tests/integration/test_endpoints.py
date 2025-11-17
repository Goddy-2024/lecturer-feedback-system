from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from feedback.models import Feedback
from users.models import User

class FeedbackAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='testpassword'
        )
        self.client.login(username='testuser', password='testpassword')
        self.feedback_url = reverse('feedback-list')  # Adjust the name as per your urls.py

    def test_create_feedback(self):
        data = {
            'course_id': 1,
            'lecturer_id': 1,
            'rating': 5,
            'comments': 'Great lecturer!'
        }
        response = self.client.post(self.feedback_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Feedback.objects.count(), 1)
        self.assertEqual(Feedback.objects.get().comments, 'Great lecturer!')

    def test_get_feedback_list(self):
        Feedback.objects.create(course_id=1, lecturer_id=1, rating=5, comments='Great lecturer!')
        response = self.client.get(self.feedback_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_update_feedback(self):
        feedback = Feedback.objects.create(course_id=1, lecturer_id=1, rating=5, comments='Great lecturer!')
        update_url = reverse('feedback-detail', args=[feedback.id])  # Adjust the name as per your urls.py
        data = {
            'comments': 'Updated feedback'
        }
        response = self.client.patch(update_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        feedback.refresh_from_db()
        self.assertEqual(feedback.comments, 'Updated feedback')

    def test_delete_feedback(self):
        feedback = Feedback.objects.create(course_id=1, lecturer_id=1, rating=5, comments='Great lecturer!')
        delete_url = reverse('feedback-detail', args=[feedback.id])  # Adjust the name as per your urls.py
        response = self.client.delete(delete_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Feedback.objects.count(), 0)