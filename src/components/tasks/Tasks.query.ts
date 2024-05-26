import { createClient } from '@/lib/supabase/client'
import { IStatus, ITask } from '@/types/tasks'
import { useQuery } from '@tanstack/react-query'

export function useTasks() {
	return useQuery({
		queryKey: ['tasks'],
		queryFn: fetchTasks,
	})
}

export function useStatus() {
	return useQuery({
		queryKey: ['status'],
		queryFn: fetchStatus,
	})
}

async function fetchTasks() {
	const supabase = createClient()
	const { data } = await supabase.from('tasks').select(`*, status:status_id(*)`)
	return data as ITask[]
}

async function fetchStatus() {
	const supabase = createClient()
	const { data } = await supabase.from('status').select('*')
	return data as IStatus[]
}
