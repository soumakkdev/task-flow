import { createClient } from '@/lib/supabase/client'
import { IAddTaskBody, IStatus, ITask } from '@/types/tasks'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

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

export function useAddTask() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: addTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] })
		},
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

async function addTask(task: IAddTaskBody) {
	const supabase = createClient()
	const { data, error } = await supabase.from('tasks').insert([task]).select()
	return data as ITask[]
}
