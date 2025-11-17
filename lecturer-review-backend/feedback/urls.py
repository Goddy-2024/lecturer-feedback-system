from django.urls import path
from .views import FeedbackList, FeedbackDetail

urlpatterns = [
    path('feedback/', FeedbackList.as_view(), name='feedback-list'),
    path('feedback/<int:pk>/', FeedbackDetail.as_view(), name='feedback-detail'),
]