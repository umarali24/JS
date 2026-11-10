arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const even =arr.filter((num) => num%2 === 0) ;
const odd = arr.filter((num) => { return num%2 !== 0});
console.log(even)
console.log(odd)

const books = [
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925,
        "genre": "Novel"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960,
        "genre": "Fiction"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "year": 1948,
        "genre": "Dystopian Fiction"
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "year": 1813,
        "genre": "Romance"
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "year": 1951,
        "genre": "Fiction"
    }
]

let book = books.filter((b) => (b.year > 1900 && b.author === "George Orwell"));
console.log(book)
book = books.filter((b) => { return b.year > 1900 && b.author === "George Orwell"});
console.log(book)
