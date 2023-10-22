import Task from "./task"

export default interface Action {
  type: 'added' | 'changed' | 'deleted'
  id?: number
  text?: string
  task?: Task
}
