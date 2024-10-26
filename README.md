# Product App

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone Repository-link

2. **Install Dependencies: Make sure you have Node.js installed.**
   ```bash
    npm install

3. **Create a .env file in the backend directory with the following content:**
   ```bash
   DATABASE_URL="mysql://user:password@localhost:3306/database_name"

4. **Database Connection and Migrations**
   ```bash
   Ensure that you have MySQL installed and running on your machine.
   npx prisma generate

5. **Run the Server:**
   ```bash
   npm run dev

  

## Folder Structure

1. **BE**
    ```bash
    product-app/
    ├── prisma/          # Contains Prisma schema and migration files
    ├── src/             # Source files for the backend
    │   ├── api/         # API route handlers
    │   ├── data-access/ # Database access using Prisma
    │   ├── middleware/   # Middleware functions for request processing
    │   ├── service/     # Business logic and service layer
    │   └── utils/       # Utility functions and helpers
    ├── .env/            # Environment variables for the backend
    ├── .gitignore/      # Files and directories to ignore in Git
    ├── package-lock.json # Automatically generated file for npm dependencies
    ├── package.json     # Contains project metadata and dependencies
    └── README.md        # This README file




## Contact Information
   ```bash
   Name: baraa assaf
   Phone: 0797218295