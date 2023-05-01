import styled from 'styled-components'

//all info about the book we want to display are our props
export default function DetailedBook({ title, author, pages, year, language, country }) {
    return <BookWrapper>
        <h1>{title}</h1>
        <h2>by {author} </h2>
        <p>Country: {country}</p>
        <p>Lanaguage: {language}</p>
        <p>Year: {year}</p>
        <p>Number of Pages: {pages}</p>
    </BookWrapper>
}

const BookWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;

    h1 {
        color: green;
      }
  
    a {
        color: blue;
    }
`