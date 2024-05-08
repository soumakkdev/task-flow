import { ListResponse, StatusResponse, TasksResponse } from '@/lib/pb-types'
import axios from 'axios'

export async function getTasks() {
	const res = await axios.get('/api/collections/tasks/records?expand=status')
	return res.data as ListResponse<TasksResponse[]>
}

export async function getStatusList() {
	const res = await axios.get('/api/collections/status/records')
	return res.data as ListResponse<StatusResponse[]>
}
