import React, { useCallback } from 'react'

import { useHistory, useParams } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'

import { Button } from '../../components/Button'
import Question from '../../components/Question'
import { RoomCode } from '../../components/RoomCode'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'

import { Container, HeaderContent, Content, QuestionsList } from './styles'

export const AdminRoom: React.FC = () => {
  const { id: roomId } = useParams<{ id: string }>()
  const history = useHistory()

  const { questions, title } = useRoom(roomId)

  const handleEndRoom = useCallback(async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }, [history, roomId])

  const handleDeleteQuestion = useCallback(
    async (questionId: string) => {
      if (confirm('Tem certeza que você deseja excluir esta pergunta?')) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
      }
    },
    [roomId]
  )

  const handleCheckQuestionAsAnswered = useCallback(
    async (questionId: string) => {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true
      })
    },
    [roomId]
  )

  const handleHighlightQuestion = useCallback(
    async (questionId: string) => {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: true
      })
    },
    [roomId]
  )

  return (
    <Container>
      <header>
        <HeaderContent>
          <img src={logoImg} alt="Letmeask" />

          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </HeaderContent>
      </header>

      <Content>
        <header>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </header>

        <QuestionsList>
          {questions.map(question => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Destacar pergunta" />
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
        </QuestionsList>
      </Content>
    </Container>
  )
}