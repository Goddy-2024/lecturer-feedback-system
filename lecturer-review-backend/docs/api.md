# API Documentation for Lecturer Review System

## Overview

This document provides an overview of the API endpoints available in the Lecturer Review System. The API is built using Django REST Framework and allows for interaction with the feedback and user management functionalities of the application.

## Base URL

The base URL for the API is:

```
http://<your-domain>/api/
```

## Authentication

The API uses token-based authentication. You must include the token in the `Authorization` header for all requests that require authentication.

```
Authorization: Token <your_token>
```

## Endpoints

### User Endpoints

#### Register User

- **URL:** `/users/register/`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **201 Created**
  ```json
  {
    "id": "integer",
    "username": "string",
    "email": "string"
  }
  ```

#### Login User

- **URL:** `/users/login/`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **200 OK**
  ```json
  {
    "token": "string"
  }
  ```

### Feedback Endpoints

#### Submit Feedback

- **URL:** `/feedback/submit/`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "course_id": "integer",
    "lecturer_id": "integer",
    "feedback": "string"
  }
  ```
- **Response:**
  - **201 Created**
  ```json
  {
    "id": "integer",
    "course_id": "integer",
    "lecturer_id": "integer",
    "feedback": "string",
    "submitted_at": "datetime"
  }
  ```

#### Get Feedback

- **URL:** `/feedback/`
- **Method:** `GET`
- **Response:**
  - **200 OK**
  ```json
  [
    {
      "id": "integer",
      "course_id": "integer",
      "lecturer_id": "integer",
      "feedback": "string",
      "submitted_at": "datetime"
    },
    ...
  ]
  ```

### Admin Endpoints

#### View All Feedback

- **URL:** `/admin/feedback/`
- **Method:** `GET`
- **Response:**
  - **200 OK**
  ```json
  [
    {
      "id": "integer",
      "course_id": "integer",
      "lecturer_id": "integer",
      "feedback": "string",
      "submitted_at": "datetime"
    },
    ...
  ]
  ```

## Error Handling

The API returns standard HTTP status codes to indicate the success or failure of an API request. Common error responses include:

- **400 Bad Request:** The request was invalid.
- **401 Unauthorized:** Authentication failed or user does not have permissions for the requested operation.
- **404 Not Found:** The requested resource was not found.
- **500 Internal Server Error:** An error occurred on the server.

## Conclusion

This API documentation provides a comprehensive overview of the available endpoints for the Lecturer Review System. For further details, please refer to the source code or contact the development team.