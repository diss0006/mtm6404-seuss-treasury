import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(json => setBooks(json))
  }, [])

  return (
    <div className="books">
      {books.map(book => (
        <Link key={book.id} to={`/books/${book.id}`} className="book-cover">
          <img src={book.image} alt={book.title} />
        </Link>
      ))}
    </div>
  )
}

export default Books
