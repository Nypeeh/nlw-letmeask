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

  > a {
    max-height: 45px;

    > img {
      max-height: 45px;
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
      font-size: 24px;
      color: #29292e;
    }

    span {
      margin-left: 1rem;
      background: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
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

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  > span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`

export const QuestionsList = styled.section`
  margin-top: 2rem;
`
