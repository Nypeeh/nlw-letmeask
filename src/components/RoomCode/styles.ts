import styled from 'styled-components'

export const Container = styled.div`
  button {
    height: 40px;
    border-radius: 0.5rem;
    overflow: hidden;

    background-color: #fff;
    border: 1px solid #835afd;
    cursor: pointer;

    display: flex;

    div {
      height: 100%;
      background: #835afd;
      padding: 0 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      display: block;
      align-self: center;
      flex: 1;
      padding: 0 1rem 0 12px;
      width: 230px;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`
