export interface ITask {
	id: string
	created_at: string
	title: string
	description?: string | null
	priority: number
	date: string
	status_id: number
	updated_at: string
	status?: IStatus
}

export interface IStatus {
	id: number
	name: string
	color: string
	created_at: string
}
