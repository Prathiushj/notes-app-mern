ThinkBoard 

A full-stack Notes Management Application built using the MERN Stack. ThinkBoard allows users to create, view, update, and delete notes through a clean and responsive interface.

Features: 
 Create, edit, and delete notes,
View all notes in a clean card-based layout,
Responsive dark-themed UI,
Toast notifications for user feedback,
Redis-based API rate limiting,
RESTful API architecture,
MongoDB database integration,
Deployed on Render.

Tech Stack:
 Frontend-
 React.js,
Tailwind CSS,
Axios,
React Toastify,
Backend-
 Node.js,
Express.js,
MongoDB,
Mongoose,
Redis,
Upstash Redis.

Installation:
 Clone the repository,
git clone <repository-url>,
cd thinkboard,
Backend Setup,
cd backend,
npm install,
npm run dev
Frontend Setup
cd frontend
npm install,
npm run dev,
Environment Variables,

Create a .env file and add:

MONGO_URI=your_mongodb_connection_string,
UPSTASH_REDIS_REST_URL=your_redis_url,
UPSTASH_REDIS_REST_TOKEN=your_redis_token,
Deployment

The application is deployed on Render with Redis-based rate limiting for API protection.

Future Improvements:
 User Authentication (JWT),
Search Notes,
Categories & Tags,
Pagination,
Rich Text Editor,
Author.
