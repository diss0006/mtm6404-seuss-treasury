import { useState, useEffect } from 'react'



function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => response.json())
      .then(json => setQuotes(json))
  }, [])

  return (
    <div className="quotes">
      {quotes.map(quote => (
        <blockquote key={quote.id} className="quote">
          <p>&ldquo;{quote.text}&rdquo;</p>
          <cite>{quote.book.title}</cite>
        </blockquote>
      ))}
    </div>
  )
}

export default Quotes
