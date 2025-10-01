//Create a new database called plp_bookstore
//use  plp_bookstore


//Create a collection called books
db.createCollection("books")

// insert at least 10 book documents into your collection with the following fields:
// title (string), author (string), genre (string), price (number), published_date (date), in_stock (boolean)
db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    price: 10.99,
    published_date: new Date("1925-04-10"),
    in_stock: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    price: 7.99,
    published_date: new Date("1960-07-11"),
    in_stock: true
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    price: 8.99,
    published_date: new Date("1949-06-08"),
    in_stock: false
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    price: 6.99,
    published_date: new Date("1813-01-28"),
    in_stock: true
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    price: 9.99,
    published_date: new Date("1951-07-16"),
    in_stock: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: 12.99,
    published_date: new Date("1937-09-21"),
    in_stock: false
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    price: 11.99,
    published_date: new Date("1953-10-19"),
    in_stock: true
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    price: 14.99,
    published_date: new Date("1988-04-15"),
    in_stock: true
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    price: 10.99,
    published_date: new Date("1932-08-31"),
    in_stock: false
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Philosophical",
    price: 8.99,
    published_date: new Date("1890-07-13"),
    in_stock: true
  }
]);
// Write queries to perform the following tasks:

//1. Find all books  with genre action in the collection.
db.books.find({ genre: "Action" })

// Find books published after 2010
db.books.find({ published_date: { $gt: new Date("2010-01-01") } })

//  Find books by a specific author
db.books.find({ author: "Harper Lee" })

//Update the price of a specific book
db.books.updateOne({ title: "The Grerat War"} ,
     {$set: {price:"20.50"}})

// Delete a book by ttitle
db.books.deleteOne({ title:"The Great War" })

// Find all books that are in stock and published after 2010
db.books.find({in_stock: true, published_year:{$gt : 2010} })

//  return only the title, author, and price fields
db.books.find( {id:-1 , title:1 , author:1 , price:1})

// Implement sorting to display books by price (both ascending and descending)
db.books.find().sort({price:1}) //ascending
db.books.find().sort({price:-1}) //descending

// Implement pagination to display books in sets of 5 per page
db.books.find().skip(0).limit(5) //page 1

// Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate({ $group: {_id: "$genre", avgPrice: { $avg: "$price" } } })

// find the author with the most books in the collection
db.books.aggregate({ $group: {_id: "$author", count: { $sum: 1 } } })

// Create an index on the `title` field for faster searches
db.books.createIndex({ title: 1 })

// Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: -1 })

// Use the `explain()` method to demonstrate the performance improvement with your indexes
db.books.find({ title: "The Great Gatsby" }).explain("executionStats")