import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOutlined?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  isOutlined = false,
  children,
  ...props
}) => {
  return (
    <Container isOutlined={isOutlined}>
      <button {...props}>{children}</button>
    </Container>
  )
}
