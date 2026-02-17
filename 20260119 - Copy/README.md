# Learning Management System API

A complete RESTful API for a Learning Management System built with Node.js, Express, and Sequelize.

## 🚀 Features

- **User Management**: Complete CRUD operations for users
- **Course Management**: Create and manage courses with pricing and status
- **Enrollment System**: Transaction-safe user enrollment with progress tracking
- **Database Relations**: Many-to-many relationships between users and courses
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Data Validation**: Sequelize model validations and constraints

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite with Sequelize ORM
- **Validation**: Sequelize model validations
- **Error Handling**: Custom middleware with async/await support

## 📁 Project Structure

```
src/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── user.controller.js    # User CRUD operations
│   ├── course.controller.js  # Course CRUD operations
│   └── enrollment.controller.js # Enrollment management
├── middleware/
│   ├── asyncHandler.js       # Async error handling
│   └── errorHandler.js       # Global error handling
├── models/
│   ├── user.js              # User model
│   ├── course.js            # Course model
│   ├── enrollment.js        # Enrollment model
│   └── index.js             # Model associations
├── routes/
│   ├── user.routes.js       # User API routes
│   ├── course.routes.js     # Course API routes
│   └── enrollment.routes.js # Enrollment API routes
├── app.js                   # Express app configuration
└── server.js                # Server startup
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/2303A51553/full-stack-2026.git
cd full-stack-2026
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## 📚 API Endpoints

### Users
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Courses
- `GET /courses` - Get all courses
- `POST /courses` - Create a new course
- `GET /courses/:id` - Get course with enrolled users
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

### Enrollments
- `GET /enrollments` - Get all enrollments
- `POST /enrollments` - Enroll user in course
- `PUT /enrollments/:id` - Update enrollment progress
- `DELETE /enrollments/:id` - Remove enrollment

## 🧪 Testing the API

### Create a User
```bash
POST /users
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Create a Course
```bash
POST /courses
{
  "title": "Node.js Fundamentals",
  "description": "Learn the basics of Node.js",
  "price": 99.99,
  "status": "published"
}
```

### Enroll User in Course
```bash
POST /enrollments
{
  "userId": 1,
  "courseId": 1
}
```

### Update Progress
```bash
PUT /enrollments/1
{
  "progress": 75
}
```

## 🗄️ Database

The application uses SQLite with automatic schema synchronization. The database file (`database.sqlite`) is created automatically when the server starts.

### Models

- **User**: name (string), email (unique string)
- **Course**: title (string), description (text), price (decimal), status (enum)
- **Enrollment**: userId (FK), courseId (FK), enrolledAt (date), progress (integer 0-100)

## 🔒 Data Validation

- Email uniqueness and format validation
- Course title length validation (3-150 chars)
- Price must be non-negative
- Progress must be between 0-100
- Foreign key constraints prevent invalid relationships

## 📝 Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/lms-api.git
cd lms-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## 📚 API Endpoints

### Users
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Courses
- `GET /courses` - Get all courses
- `POST /courses` - Create a new course
- `GET /courses/:id` - Get course with enrolled users
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

### Enrollments
- `GET /enrollments` - Get all enrollments
- `POST /enrollments` - Enroll user in course
- `PUT /enrollments/:id` - Update enrollment progress
- `DELETE /enrollments/:id` - Remove enrollment

## 🧪 Testing the API

### Create a User
```bash
POST /users
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Create a Course
```bash
POST /courses
{
  "title": "Node.js Fundamentals",
  "description": "Learn the basics of Node.js",
  "price": 99.99,
  "status": "published"
}
```

### Enroll User in Course
```bash
POST /enrollments
{
  "userId": 1,
  "courseId": 1
}
```

### Update Progress
```bash
PUT /enrollments/1
{
  "progress": 75
}
```

## 🗄️ Database

The application uses SQLite with automatic schema synchronization. The database file (`database.sqlite`) is created automatically when the server starts.

### Models

- **User**: name (string), email (unique string)
- **Course**: title (string), description (text), price (decimal), status (enum)
- **Enrollment**: userId (FK), courseId (FK), enrolledAt (date), progress (integer 0-100)

## 🔒 Data Validation

- Email uniqueness and format validation
- Course title length validation (3-150 chars)
- Price must be non-negative
- Progress must be between 0-100
- Foreign key constraints prevent invalid relationships

## 📝 Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

For questions or feedback, please open an issue on GitHub.
=======
# full-stack-2026
>>>>>>> origin/main
