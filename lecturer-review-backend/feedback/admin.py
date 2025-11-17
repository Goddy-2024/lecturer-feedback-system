from django.contrib import admin
from .models import Feedback

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('id', 'lecturer', 'student', 'rating', 'comment', 'created_at')
    search_fields = ('lecturer__name', 'student__name', 'comment')
    list_filter = ('rating', 'created_at')
    ordering = ('-created_at',)