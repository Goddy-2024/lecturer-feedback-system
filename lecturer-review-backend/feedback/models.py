from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name

class Feedback(models.Model):
    course = models.ForeignKey(Course, related_name='feedbacks', on_delete=models.CASCADE)
    lecturer = models.ForeignKey(User, related_name='feedbacks', on_delete=models.CASCADE)
    rating = models.IntegerField()
    comments = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Feedback for {self.course.name} by {self.lecturer.username}'