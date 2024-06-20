import React, { ReactNode } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ISelectOption } from './Select'

export default function Dropdown(props: { options: ISelectOption[]; children: ReactNode }) {
	const { options, children } = props
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent>
				{options?.map((opt) => (
					<DropdownMenuItem key={opt.value}>{opt.label}</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
