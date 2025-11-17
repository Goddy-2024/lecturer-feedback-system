from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Feedback
from .serializers import FeedbackSerializer

class FeedbackTests(APITestCase):
    def setUp(self):
        self.feedback_data = {
            'course': 'Test Course',
            'lecturer': 'Test Lecturer',
            'rating': 5,
            'comments': 'Great lecturer!',
        }
        self.feedback = Feedback.objects.create(**self.feedback_data)

    def test_create_feedback(self):
        response = self.client.post(reverse('feedback-list'), self.feedback_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Feedback.objects.count(), 2)

    def test_get_feedback(self):
        response = self.client.get(reverse('feedback-detail', args=[self.feedback.id]), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, FeedbackSerializer(self.feedback).data)

    def test_update_feedback(self):
        updated_data = {
            'course': 'Updated Course',
            'lecturer': 'Updated Lecturer',
            'rating': 4,
            'comments': 'Good lecturer!',
        }
        response = self.client.put(reverse('feedback-detail', args=[self.feedback.id]), updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.feedback.refresh_from_db()
        self.assertEqual(self.feedback.course, 'Updated Course')

    def test_delete_feedback(self):
        response = self.client.delete(reverse('feedback-detail', args=[self.feedback.id]), format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Feedback.objects.count(), 0)