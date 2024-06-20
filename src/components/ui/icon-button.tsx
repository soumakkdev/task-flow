import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'
	return (
		<Comp
			className={cn(
				'h-10 w-10 rounded-full hover:bg-accent inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
			)}
			ref={ref}
			{...props}
		/>
	)
})
IconButton.displayName = 'IconButton'

export { IconButton }
