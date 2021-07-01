import React, { FormEvent, useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import { Container, MainContent } from './styles'

import { Button } from '../../components/Button'
import { database } from '../../services/firebase'
import { useAuth } from '../../contexts/auth'

export const NewRoom: React.FC = () => {
  const { user } = useAuth()

  const [newRoom, setNewRoom] = useState('')
  const history = useHistory()

  const handleCreateRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      if (newRoom.trim() === '') {
        return
      }

      const roomRef = database.ref('rooms')

      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id
      })

      history.push(`/admin/rooms/${firebaseRoom.key}`)
    },
    [history, newRoom, user?.id]
  )

  return (
    <Container>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas e Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              // ref={inputRef}
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </Container>
  )
}
