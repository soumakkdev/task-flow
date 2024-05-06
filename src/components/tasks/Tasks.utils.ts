import { atom } from 'jotai'

export enum TasksViews {
	Table = '1',
	Kanban = '2',
	Calendar = '3',
}

export const currentViewAtom = atom(TasksViews.Table)
