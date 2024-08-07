# Personal Notes Application

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account and cluster setup
- Git installed

## Backend Setup
1. Clone the repository
```bash
git clone https://github.com/pankajmokashi/personal-notes.git
cd personal-notes
```

2. Navigate to the backend directory
```bash
cd notes-app-backend
```

3. Install dependencies
```bash
npm install
```

4. Create a .env file in the backend directory
```bash
touch .env
```

5. Add the following environment variables to the .env file
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<mydatabase>?retryWrites=true&w=majority
```
- Replace username, password, and mydatabase with your actual MongoDB Atlas credentials and database name.

6. Start the backend server
```bash
npm start
```

## Frontend Setup
1. Navigate to the frontend directory
```bash
cd ../notes-app
```

2. Install dependencies
```bash
npm install
```

3. Start the frontend server
```bash
npm start
```

## Backend Endpoints
- Get All Groups:
```
GET /api/groups
```
    
- Create a New Group:
```
POST /api/groups
{
  "name": "Group Name",
  "color": "#ffffff"
}
```

- Get Notes by Group:
```
GET /api/groups/:groupId/notes
```
    
- Create a New Note:
```
POST /api/groups/:groupId/notes
{
  "content": "Note content"
}
```
    
