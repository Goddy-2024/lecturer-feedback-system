from django.utils.deprecation import MiddlewareMixin

class CustomMiddleware(MiddlewareMixin):
    def process_request(self, request):
        # Custom logic before the view is called
        pass

    def process_response(self, request, response):
        # Custom logic after the view is called
        return response

    def process_exception(self, request, exception):
        # Custom logic for handling exceptions
        return None  # Return None to continue processing or a response to stop it