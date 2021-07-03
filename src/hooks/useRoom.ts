import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/auth'
import { database } from '../services/firebase'

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string
      avatar: string
    }
    content: string
    isAnswered: boolean
    isHighlighted: boolean
    likes: Record<
      string,
      {
        authorId: string
      }
    >
  }
>

interface QuestionData {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighlighted: boolean
  likeCount: number
  likeId: string | undefined
}

export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(
            ([key, like]) => like.authorId === user?.id
          )?.[0]
        })
      )

      const sortedByDescQuestions = parsedQuestions.sort((a, b) => {
        if (a.isAnswered && !b.isAnswered) {
          return 1
        } else if (!a.isAnswered && b.isAnswered) {
          return -1
        } else if (!a.isAnswered && !b.isAnswered) {
          return 0
        } else {
          return a.likeCount > b.likeCount ? -1 : 1
        }
      })

      setQuestions(sortedByDescQuestions)
      setTitle(databaseRoom.title)
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return { questions, title }
}
