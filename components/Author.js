import styled from 'styled-components'

//all info about the author we want to display are our props
export default function Author({ author, country, language}) {
    return <AuthorWrapper>
        <h1>{author}</h1>
        <p id="Country">Country: {country}</p>
        <p id="Language">Language: {language}</p>
    </AuthorWrapper>
}

const AuthorWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;

    h1 {
        color: green;
      }
  
    #Country {
        color: blue;
    }

    #Language {
        color: black;
    }
`