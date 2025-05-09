📇 Contact Backend API (Node.js + Express + MongoDB)

A simple RESTful API for managing contacts, built with Node.js, Express, and MongoDB. This project demonstrates CRUD operations and is ideal for beginners learning backend development.

🚀 Features
	•	Create a new contact
	•	Read all contacts or a specific contact by ID
	•	Update existing contact details
	•	Delete a contact
	•	Error handling with express-async-handler
	•	MongoDB integration using Mongoose

🛠️ Technologies Used
	•	Node.js
	•	Express
	•	MongoDB
	•	Mongoose
	•	express-async-handler
	•	dotenv

📂 Project Structure
contact_backend_api_node_js/
├── config/
│   └── dbConnection.js       # MongoDB connection setup
├── controllers/
│   └── contactController.js  # Controller functions for contact routes
├── model/
│   └── contactModel.js       # Mongoose schema and model
├── routes/
│   └── contactRoutes.js      # Express routes for contact API
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── server.js                 # Entry point of the application

📦 Installation
	1.	Clone the repository:
      git clone https://github.com/Ranj1/contact_backend_api_node_js.git
      cd contact_backend_api_node_js

 2.	Install dependencies:
    npm install
   	
3.	Set up environment variables:

Create a .env file in the root directory and add the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string

▶️ Running the Application

Start the server with:
npm start

The API will be accessible at http://localhost:5000/api/contacts.

📬 API Endpoints
	•	GET /api/contacts: Retrieve all contacts
	•	GET /api/contacts/:id: Retrieve a contact by ID
	•	POST /api/contacts: Create a new contact
	•	PUT /api/contacts/:id: Update a contact by ID
	•	DELETE /api/contacts/:id: Delete a contact by ID

🧪 Testing the API

You can use tools like Postman or curl to test the API endpoints.

Example: Create a new contact
	•	Endpoint: POST /api/contacts
	•	Headers:
	•	Content-Type: application/json
	•	Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
📝 License

This project is licensed under the MIT License.
