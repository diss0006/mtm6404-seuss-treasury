import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Book() {
  const params = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${params.id}`)
      .then(response => response.json())
      .then(json => setBook(json))
  }, [params.id])

  if (!book) {
    return <p>Loading...</p>
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
    </div>
  )
}

export default Book
