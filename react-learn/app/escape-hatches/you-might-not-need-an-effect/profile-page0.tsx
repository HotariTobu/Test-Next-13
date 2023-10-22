import { useEffect, useMemo, useState } from "react"
import { useImmer } from "use-immer"
import UsersProvider, { useUsers, useUsersDispatch } from "./user"

const initialUsers = [
  { id: 0, name: 'Tom', comments: [''] },
  { id: 1, name: 'Mary', comments: [''] },
]

function Profile(props: {
  user: {
    id: number
    name: string,
    comments: string[]
  }
}) {
  const [comments, updateComments] = useImmer(props.user.comments)
  const [comment, setComment] = useState('')

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('');
  }, [props.user]);

  const dispatch = useUsersDispatch()

  const addComment = () => {
    dispatch && dispatch({
      type: 'add-comment',
      userId: props.user.id,
      comment,
    })

    updateComments(draft => {
      draft.push(comment)
    })

    setComment('')
  }

  return (
    <div>
      <div>
        <h1>{props.user.name}</h1>
        <input value={comment} onChange={e => setComment(e.target.value)} />
        <button onClick={addComment}>Add</button>
      </div>
      {comments.map(c => (
        <div key={c}>
          {c}
        </div>
      ))}
    </div>
  )
}

function ProfileList() {
  const users = useUsers() ?? []
  const [user, setUser] = useState(users[0])

  return (
    <>
      {users.map(user => (
        <button key={user.id} onClick={() => setUser(user)}>
          {user.name}
        </button>
      ))}
      <Profile user={user} />
    </>
  )
}

export default function ProfilePage() {
  return (
    <div style={{ color: 'gray' }}>
      <UsersProvider initialUsers={initialUsers}>
        <ProfileList />
      </UsersProvider>
    </div>
  )
}
