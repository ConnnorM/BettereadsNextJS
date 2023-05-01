import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import useSWR from 'swr'
import AuthorList from '../components/AuthorList'
import styled from "styled-components"


//function to fetch a particular url and return the data as json
const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  //first param is the path of the api endpoint (what will be fetched)
  //second param is the fetcher function that should execute to get the data
  //if it works, data is full and error is false
  //if it fails, data is undefined and error is true
  const { data, error } = useSWR('api/authors', fetcher)

  //if the API encounters an error, this will render
  if (error) {
    return <Main>Error!</Main>
  }

  //if the data has not come back yet, load this
  if (!data) {
    return <Main>
      Loading...
    </Main>
  }

  //if the data comes back as expected, this renders
  return (
    <Container>
      {/* use nextjs to add html metadata to each page */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <MainContainer>
          <TitleContainer>
            <h1 id="Title">Welcome to Bettereads</h1>
            <p id="Desc">--&#62;  Scroll right to see all our registered authors --&#62; </p>
          </TitleContainer>
          <AuthorList authors={data} />
        </MainContainer>
      </Main>
    </Container>
  )
}

const MainContainer = styled.div`
    display: grid;

    #Title {
      color: red;
    }

    #Desc {
        font-weight: bold;
    }
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
