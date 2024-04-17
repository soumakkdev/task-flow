'use server'

import pb from '@/lib/pb'

export async function getTasks() {
	return await pb.collection('tasks').getFullList()
}
