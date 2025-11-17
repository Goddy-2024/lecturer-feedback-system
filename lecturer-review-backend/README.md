# Lecturer Review System Backend

This project is a Django-based backend for a lecturer review system. It provides a RESTful API for managing feedback and user data related to lecturers.

## Project Structure

- **manage.py**: Command-line utility for managing the Django project.
- **.env**: Environment variables for the project (e.g., database credentials, secret keys).
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: Documentation for the project.
- **docker-compose.yml**: Defines services, networks, and volumes for Docker containers.
- **Dockerfile**: Instructions for building the Docker image for the Django application.
- **entrypoint.sh**: Script executed when the Docker container starts, typically running migrations and starting the server.
- **lecturer_api/**: Contains the main application logic, including settings, URLs, and WSGI/ASGI entry points.
- **feedback/**: Application for managing feedback related to lecturers.
- **users/**: Application for managing user accounts and authentication.
- **core/**: Contains utility functions, custom exceptions, and middleware.
- **static/**: Directory for static files (CSS, JavaScript, images).
- **templates/**: Directory for HTML templates for the Django admin interface.
- **docs/**: Contains API documentation.
- **tests/**: Contains unit and integration tests for the project.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd lecturer-review-backend
   ```

2. **Create a Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add your environment variables, such as:
   ```
   SECRET_KEY=your_secret_key
   DEBUG=True
   DATABASE_URL=your_database_url
   ```

5. **Run Migrations**
   ```bash
   python manage.py migrate
   ```

6. **Run the Development Server**
   ```bash
   python manage.py runserver
   ```

7. **Docker Setup (Optional)**
   If you prefer to run the application using Docker, you can use the provided `docker-compose.yml` file:
   ```bash
   docker-compose up --build
   ```

## API Documentation

Refer to `docs/api.md` for detailed API documentation, including available endpoints and request/response formats.

## Testing

To run the tests, use:
```bash
pytest
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.