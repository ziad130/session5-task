# session5-task 

## 📘 Entity: Book

The `Book` entity includes the following fields:
- `title` (String, required)
- `author` (String, required)
- `description` (String)
- `publishedDate` (Date)
- `genre` (String)
- `price` (Number)

---

## 📌 Routes Summary
| Method | Endpoint        | Description           |
|--------|------------------|-----------------------|
| POST   | `/books`         | Create a new book     |
| GET    | `/books`         | Get all books         |
| GET    | `/books/:id`     | Get a book by ID      |
| PATCH  | `/books/:id`     | Update a book         |
| DELETE | `/books/:id`     | Delete a book         |

---

server.js : starts the project
db.js : connection to moongose
bookRouts.js : contains all routes needed

