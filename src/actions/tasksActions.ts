'use server'

import pb from '@/lib/pb'
import { StatusResponse, TasksResponse } from '@/lib/pb-types'

export async function getTasks() {
	return await pb.collection<TasksResponse>('tasks').getFullList({ expand: 'status' })
}

export async function getStatusList() {
	return await pb.collection<StatusResponse>('status').getFullList()
}
