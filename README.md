# 📚 PLP Bookstore – MongoDB Assignment

## Overview
This project demonstrates the fundamentals and advanced techniques of MongoDB by building and querying a sample bookstore database. You will find scripts to insert book data, perform CRUD operations, run advanced queries, use aggregation pipelines, and implement indexing for performance optimization.

## Contents
- `insert_books.js`: Script to populate the `books` collection with sample data.
- `queries.js`: Contains all MongoDB queries for CRUD, advanced queries, aggregation, and indexing.
- `mongodb-screenshot.png`: Screenshot showing your MongoDB Compass or Atlas collections and sample data.
- `Week1-Assignment.md`: Assignment instructions and requirements.
- `SETUP_INSTRUCTIONS.md`: Step-by-step setup guide (if provided).
- `examples/`: Example scripts for MongoDB connection and shell usage.

## Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) **OR** a free [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster
- [MongoDB Shell (mongosh)](https://www.mongodb.com/try/download/shell) or [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## Setup Instructions
1. **Clone the repository:**
	```bash
	git clone <your-repo-url>
	cd mongodb-assignment
	```
2. **Install dependencies (if any):**
	```bash
	npm install
	```
3. **Start MongoDB:**
	- If using local MongoDB, run:
	  ```bash
	  mongod
	  ```
	- If using MongoDB Atlas, ensure your cluster is running and note your connection string.

4. **Insert sample data:**
	- Edit the MongoDB connection URI in `insert_books.js` if needed.
	- Run the script:
	  ```bash
	  node insert_books.js
	  ```

5. **Run queries:**
	- Open `queries.js` and follow the comments to run each query in the MongoDB shell or Compass.
	- Alternatively, you can copy-paste queries into your shell or use them in a Node.js script.

## What Each File Does
- **insert_books.js**: Connects to MongoDB and inserts at least 10 book documents into the `plp_bookstore.books` collection.
- **queries.js**: Contains all required queries:
  - Basic CRUD (find, insert, update, delete)
  - Advanced queries (filtering, projection, sorting, pagination)
  - Aggregation pipelines (average price by genre, most prolific author, books by decade)
  - Index creation and performance analysis
- **mongodb-screenshot.png**: Visual proof of your data and collections.

## How to Submit
1. Ensure the following files are present and up to date:
	- `insert_books.js`
	- `queries.js`
	- `README.md`
	- `mongodb-screenshot.png`
2. Commit your changes:
	```bash
	git add .
	git commit -m "Complete MongoDB assignment"
	git push
	```
3. Your submission will be automatically graded. The instructor will review your work after autograding.

## Notes
- Use the `SETUP_INSTRUCTIONS.md` for detailed environment setup if you encounter issues.
- All queries should use the `plp_bookstore` database and `books` collection.
- For any questions, refer to `Week1-Assignment.md` or contact your instructor.

---

Happy learning! 🚀