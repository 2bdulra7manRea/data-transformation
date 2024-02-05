# Node.js Data Transformation Serverless Application

This is a serverless Node.js application for data transformation, running on AWS Lambda. The application provides endpoints for transforming data, user login, and user registration. It also includes a unit test for data aggregation.

## Endpoints

### Data Transformation Endpoint

- **Path:** `/`
- **Method:** `POST`
- **Request Body:**

  - JSON payload containing the data to be transformed.

  ```json
  {
    "data": "[{a:10 , b:30},{a:20 , b:30}]"
  }
  ```

- **Response:**
  - Standard response format (see below) with the transformed data or an error message.

### User Login Endpoint

- **Path:** `/login`
- **Method:** `POST`
- **Request Body:**
  - JSON payload containing user email and password.
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - Standard response format (see below) with a user token or an error message.

### User Registration Endpoint

- **Path:** `/register`
- **Method:** `POST`
- **Request Body:**
  - JSON payload containing user email and password.
  ```json
  {
    "email": "newuser@example.com",
    "password": "newpassword"
  }
  ```
- **Response:**
  - Standard response format (see below) with a success message or an error message.

## Unit Test

### Data Aggregation Test

- Test file: `tests/aggregateObjects.test.js`

## Standard Response Format

The API follows a standard response format for consistency:

### Success Response

```json
{
  "statusCode": 200,
  "data": "YourSuccessDataHere"
}
```

### Error Response

```json
{
  "statusCode": 400,
  "data": null,
  "error": "Error message describing the issue"
}
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Deploy the application to AWS Lambda.

3. Set up your AWS Lambda function's environment variables, including any necessary AWS credentials.

4. Run the unit tests:

   ```bash
   npm test
   ```

5. Start using the endpoints!

## Local Development

1. Install Docker and Docker Compose.

2. Create an `.env` file in the project root with the following content:

   ```
   IS_OFFLINE=true
   USER_POOL=your_user_pool_id
   USER_POOL_CLIENT=your_user_pool_client_id
   ```

3. Run the application locally:

   ```bash
   docker-compose up
   ```

4. Access the application at `http://localhost:3002`.

## Dependencies

- Node.js
- AWS Lambda
- jest
- Amazon Cognito

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
