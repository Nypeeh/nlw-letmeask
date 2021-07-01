import styled, { css } from 'styled-components'

interface ContainerProps {
  isAnswered: boolean
  isHighlighted: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #fefefe;
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + div {
    margin-top: 0.5rem;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      gap: 1rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s ease;

      :hover {
        filter: brightness(0.7);
      }

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 0.5rem;
      }

      &.liked {
        color: #835afd;

        svg path {
          stroke: #835afd;
        }
      }
    }
  }

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: #f4f0ff;
      border: 1px solid #835afd;

      footer > div > span {
        color: #29292e;
      }
    `}

  ${({ isAnswered }) =>
    isAnswered &&
    css`
      background: #dbdcdd;
    `}
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
    color: #737380;
    font-size: 0.9rem;
  }
`
