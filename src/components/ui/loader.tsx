import { cn } from '@/lib/utils'
import { LoaderIcon } from 'lucide-react'

export default function Loader({ className }: { className?: string }) {
	return <LoaderIcon className={cn('animate-spin text-primary h-6 w-6', className)} />
}
