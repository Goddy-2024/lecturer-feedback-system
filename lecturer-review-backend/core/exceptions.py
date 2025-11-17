class NotFoundException(Exception):
    pass

class ValidationException(Exception):
    pass

class PermissionDeniedException(Exception):
    pass

class AuthenticationException(Exception):
    pass

class CustomAPIException(Exception):
    def __init__(self, detail, status_code):
        self.detail = detail
        self.status_code = status_code
        super().__init__(detail)