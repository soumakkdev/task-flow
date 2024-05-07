/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Status = "status",
	Tasks = "tasks",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum StatusTypeOptions {
	"Active" = "Active",
	"Done" = "Done",
	"Closed" = "Closed",
}
export type StatusRecord = {
	color?: string
	name?: string
	type?: StatusTypeOptions
}

export enum TasksPriorityOptions {
	"Urgent" = "Urgent",
	"High" = "High",
	"Normal" = "Normal",
	"Low" = "Low",
}
export type TasksRecord = {
	deadline?: IsoDateString
	description?: HTMLString
	priority?: TasksPriorityOptions
	status?: RecordIdString
	title?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type StatusResponse<Texpand = unknown> = Required<StatusRecord> & BaseSystemFields<Texpand>
export type TasksResponse<Texpand = unknown> = Required<TasksRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	status: StatusRecord
	tasks: TasksRecord
	users: UsersRecord
}

export type CollectionResponses = {
	status: StatusResponse
	tasks: TasksResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'status'): RecordService<StatusResponse>
	collection(idOrName: 'tasks'): RecordService<TasksResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
