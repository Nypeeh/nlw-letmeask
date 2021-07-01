import React, { useCallback } from 'react'

import copyImg from '../../assets/images/copy.svg'

import { Container } from './styles'

interface RoomCodeProps {
  code: string
}

export const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const copyRoomCodeToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code)
  }, [code])

  return (
    <Container>
      <button onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{code}</span>
      </button>
    </Container>
  )
}
