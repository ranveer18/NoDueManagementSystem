# No Due Management System

The No Due Management System is a web-based application designed to streamline and automate the process of managing no dues in a college or educational institution. The system allows students to submit no due requests online, which are then processed and approved by faculty members. It is built using React, Node.js, and MongoDB.

## Features

- User Authentication: The system provides secure user authentication using JSON Web Tokens (JWT), allowing users to register, login, and reset passwords.
- Student and Faculty Management: The application includes functionality for managing student and faculty details, allowing administrators to perform CRUD operations on student and faculty records.
- No Due Requests: Students can submit no due requests through the system, specifying the departments or sections they need clearance from.
- Request Workflow: The system implements a workflow for processing and approving no due requests. Faculty members can review and approve requests, and students receive notifications regarding the status of their requests.
- Notifications: The system includes a notification system to alert users about the status of their requests and any updates in the approval process.
- Database Integration: The application uses MongoDB as the database to store and retrieve data related to users, requests, and other system entities.

## Installation

To run the No Due Management System locally, follow these steps:

1. Clone the repository to your local machine using the following command:

git clone https://github.com/ranveer18/NoDueManagementSystem.git


2. Navigate to the project directory:


cd no-due-management-system


3. Install the required dependencies for the backend server. Run the following command in the root directory:


npm install


4. Similarly, navigate to the `client` directory and install the frontend dependencies:

cd client
npm install


5. Rename the `.env.example` file in the root directory to `.env` and configure the environment variables according to your setup. Make sure to provide the necessary values for the database connection and other variables.

6. Start the development server. In the root directory, run the following command:

npm run dev


This will concurrently run the backend server and the React frontend.

7. Access the application by visiting `http://localhost:3000` in your web browser.

## Usage

Upon accessing the application, you will be presented with the login page. If you don't have an account, you can register using the registration link. Once logged in, the application will direct you to the respective dashboard based on your role (admin, faculty, or student).

- Admin Dashboard: The admin dashboard provides options to manage student and faculty records, view and process no due requests, and perform other administrative tasks.
- Faculty Dashboard: The faculty dashboard allows faculty members to review and approve no due requests submitted by students.
- Student Dashboard: Students can submit no due requests, view the status of their requests, and receive notifications about updates.

## Contributing

We welcome contributions to the No Due Management System project! To contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make the necessary code changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, explaining the changes you've made.

Please ensure that your code adheres to the project's coding style and conventions. Include appropriate tests and documentation for your changes.

## License

The No Due Management System is open source and released under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)

## Contact

If you have any questions or suggestions regarding the No Due Management System, please feel free to contact us at [email@example.com](mailto:email@example.com).

Thank you for using the No Due Management System!
