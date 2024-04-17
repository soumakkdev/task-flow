'use client'
import { getTasks } from '@/actions/tasksActions'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ViewTasks() {
	const { data, isLoading } = useQuery({
		queryKey: ['tasks'],
		queryFn: getTasks,
	})

	if (isLoading) return 'Loading'
	console.log(data)
	return <div>ViewTasks</div>
}
