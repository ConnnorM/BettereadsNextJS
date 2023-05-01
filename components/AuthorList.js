import styled from "styled-components"
import Author from "./Author"

//takes in all the authors
export default function AuthorList({ authors }) {
    return <Wrapper>
        { authors.map(a => <Author author={a.author} country={a.country} language={a.language} />) }
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: row;
`