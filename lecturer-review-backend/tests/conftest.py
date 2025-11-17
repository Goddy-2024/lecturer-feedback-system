# tests/conftest.py

import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def create_feedback(db):
    def make_feedback(data):
        from feedback.models import Feedback
        return Feedback.objects.create(**data)
    return make_feedback

@pytest.fixture
def create_user(db):
    from django.contrib.auth import get_user_model
    User = get_user_model()
    def make_user(**kwargs):
        return User.objects.create_user(**kwargs)
    return make_user

@pytest.fixture
def authenticated_client(api_client, create_user):
    user = create_user(username='testuser', password='testpass')
    api_client.force_authenticate(user=user)
    return api_client

@pytest.fixture
def feedback_data():
    return {
        'course_id': 1,
        'lecturer_id': 1,
        'rating': 5,
        'comments': 'Excellent lecturer!'
    }