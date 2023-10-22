import { Dispatch, ReactNode, createContext, useContext } from "react"
import { useImmerReducer } from "use-immer"

interface User {
  id: number
  name: string
  comments: string[]
}

interface AddCommentAction {
  type: 'add-comment'
  userId: number
  comment: string
}

interface AddUserAction {
  type: 'add-user'
  name: string
}

type Action = AddCommentAction | AddUserAction

const reducer = (draft: User[], action: Action) => {
  switch (action.type) {
    case 'add-comment': {
      const user = draft.find(u => u.id === action.userId)
      user?.comments.push(action.comment)
      break
    }

    case 'add-user': {
      const lastUser = draft[draft.length - 1]
      const userId = lastUser?.id ?? 0
      draft.push({
        id: userId,
        name: action.name,
        comments: [],
      })
      break
    }
  }
}

const usersContext = createContext<User[] | null>(null)
const usersDispatchContext = createContext<Dispatch<Action> | null>(null)

export const useUsers = () => {
  return useContext(usersContext)
}

export const useUsersDispatch = () => {
  return useContext(usersDispatchContext)
}

const UsersProvider = (props: {
  initialUsers: User[]
  children: ReactNode
}) => {
  const [users, dispatch] = useImmerReducer(reducer, props.initialUsers)

  return (
    <usersContext.Provider value={users}>
      <usersDispatchContext.Provider value={dispatch}>
        {props.children}
      </usersDispatchContext.Provider>
    </usersContext.Provider>
  )
}

export default UsersProvider
