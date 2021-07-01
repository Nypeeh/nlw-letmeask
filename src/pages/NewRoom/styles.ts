import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  /* align-items: stretch; */
  height: 100vh;

  > aside {
    flex: 0.7;
    background-color: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 1rem;
    }

    p {
      font-size: 24px;
      line-height: 2rem;
      margin-top: 1rem;
      color: #f8f8f8;
    }
  }

  > main {
    flex: 1;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 4rem 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 1rem;
      background-color: #fff;
      border: 2px solid #ddd;
      outline: 0;
      transition: border 0.2s ease;

      :focus {
        border: 2px solid #835afd;
      }
    }

    button {
      margin-top: 1rem;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 1rem;

    a {
      color: #e559f9;
    }
  }
`
