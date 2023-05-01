import styled from 'styled-components'

//all info about the book we want to display are our props
export default function Book({ title, author, pages, link }) {
    return <BookWrapper>
        <h1>{title}</h1>
        <h2>by {author} </h2>
        <p>Number of Pages: {pages}</p>
        <a hrf = {link}>Learn More</a>
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