import { Dispatch, createContext } from "react"
import Task from "./task"
import Action from "./action"

export const TasksContext = createContext<Task[] | null>(null)
export const TasksDispatchContext = createContext<Dispatch<Action> | null>(null)
