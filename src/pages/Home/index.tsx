import React, { FormEvent, useCallback, useRef } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { Container, MainContent, ButtonCreateRoom, Separator } from './styles'

import { Button } from '../../components/Button'
import { useAuth } from '../../contexts/auth'
import { database } from '../../services/firebase'

export const Home: React.FC = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCreateRoom = useCallback(async () => {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }, [history, signInWithGoogle, user])

  const handleJoinRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      if (inputRef.current?.value.trim() === '') {
        return
      }

      const roomCode = inputRef.current?.value
      const roomRef = await database.ref(`rooms/${roomCode}`).get()

      if (!roomRef.exists()) {
        alert('Room does not exists')
        return
      }

      if (roomRef.val().endedAt) {
        alert('Room already closed')
        return
      }

      history.push(`/rooms/${roomCode}`)
    },
    [history]
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
          <ButtonCreateRoom type="button" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>

          <Separator>ou entre em uma sala</Separator>

          <form onSubmit={handleJoinRoom}>
            <input ref={inputRef} placeholder="Digite o código da sala" />
            <Button type="submit">
              <FaSignInAlt /> Entrar na sala
            </Button>
          </form>
        </MainContent>
      </main>
    </Container>
  )
}
