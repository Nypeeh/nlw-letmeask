import styled, { css } from 'styled-components'

interface ContainerProps {
  isOutlined?: boolean
}

export const Container = styled.div<ContainerProps>`
  button {
    height: 50px;
    border-radius: 0.5rem;
    font-weight: 500;
    background-color: #835afd;
    color: #fff;
    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;
    transition: filter 0.2s ease;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    > svg {
      margin-right: 0.5rem;
    }

    ${({ isOutlined }) =>
      isOutlined &&
      css`
        background: #fff;
        border: 1px solid #835afd;
        color: #835afd;
      `}
  }
`
