from django_filters import rest_framework as filters
from .models import Feedback

class FeedbackFilter(filters.FilterSet):
    class Meta:
        model = Feedback
        fields = {
            'course': ['exact', 'icontains'],
            'lecturer': ['exact', 'icontains'],
            'rating': ['exact', 'gte', 'lte'],
            'created_at': ['exact', 'gte', 'lte'],
        }