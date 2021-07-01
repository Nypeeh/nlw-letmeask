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

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 840px) {
    > aside {
      display: none;
    }
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  align-items: stretch;
  text-align: center;
  padding: 0 5%;

  > img {
    align-self: center;
  }

  form {
    input {
      padding-left: 1rem;
      height: 50px;
      border-radius: 8px;
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
`

export const ButtonCreateRoom = styled.button`
  margin-top: 4rem;
  height: 50px;
  border-radius: 0.5rem;
  font-weight: 500;
  background-color: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  transition: filter 0.2s ease;

  :hover {
    filter: brightness(0.9);
  }

  img {
    margin-right: 0.5rem;
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: #a8a8b3;
  margin: 2rem 0;
  display: flex;
  align-items: center;

  ::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 1rem;
  }

  ::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 1rem;
  }
`
