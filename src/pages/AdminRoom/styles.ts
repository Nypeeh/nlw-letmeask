import styled from 'styled-components'

export const Container = styled.div`
  > header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 1rem;

    button {
      height: 40px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;

    > a {
      margin-bottom: 1.5rem;
    }

    > div {
      margin-top: 1.5rem;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 3%;

  header {
    margin: 2rem 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      color: #29292e;
    }

    span {
      margin-left: 1rem;
      background: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 0.9rem;
    }
  }

  form {
    textarea {
      width: 100%;
      border: 2px solid transparent;
      padding: 1rem;
      border-radius: 8px;
      background-color: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
      outline: 0;
      transition: border 0.2s ease;

      :focus {
        border: 2px solid #835afd;
      }
    }
  }
`
export const QuestionsList = styled.section`
  margin-top: 2rem;
`
