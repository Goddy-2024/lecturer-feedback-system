from django.contrib import admin
from .models import User  # Adjust the import based on your user model

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'is_staff', 'is_active', 'date_joined')
    search_fields = ('username', 'email')
    list_filter = ('is_staff', 'is_active')
    ordering = ('date_joined',)
    readonly_fields = ('date_joined',)

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.select_related()  # Optimize queries by using select_related if needed

# Register any additional models here if necessary