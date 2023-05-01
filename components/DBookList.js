import styled from "styled-components"
import DetailedBook from "./DetailedBook"

//takes in all the books
export default function BookList({ books }) {
    return <Wrapper>
        { books.map(b => <DetailedBook title={b.title} author={b.author} pages={b.pages} year={b.year} language={b.language} country={b.country}/>) }
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: row;
`