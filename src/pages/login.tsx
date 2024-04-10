import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from '@tanstack/react-form'

export default function LoginPage() {
	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		onSubmit: async ({ value }) => {
			console.log(value)
		},
	})
	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form
					className="space-y-6"
					onSubmit={(e) => {
						e.preventDefault()
						e.stopPropagation()
						void form.handleSubmit()
					}}
				>
					<div>
						<form.Field name="email">
							{(field) => (
								<>
									<Label htmlFor={field.name}>Email address</Label>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										id={field.name}
										placeholder="Email"
									/>
								</>
							)}
						</form.Field>
					</div>

					<div>
						<form.Field name="password">
							{(field) => (
								<>
									<Label htmlFor={field.name}>Email address</Label>
									<Input
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										id={field.name}
										placeholder="Password"
									/>
								</>
							)}
						</form.Field>
					</div>

					<div>
						<Button size="lg" className="w-full">
							Login
						</Button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{' '}
					<a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						Sign up here
					</a>
				</p>
			</div>
		</div>
	)
}
