import { useForm } from "@inertiajs/react";

export default function Login() {
	const { data, setData, post, processing, errors } = useForm({
		email: "",
		password: ""
	});

	const submit = (e) => {
		e.preventDefault();
		post(route("login"));
	};

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Login</h1>
			<form onSubmit={submit}>
				<div className="mb-4">
					<label className="block">Email</label>
					<input
						type="email"
						value={data.email}
						onChange={(e) => setData("email", e.target.value)}
						className="input"
					/>
					{errors.email && (
						<div className="text-red-500">{errors.email}</div>
					)}
				</div>
				<div className="mb-4">
					<label className="block">Password</label>
					<input
						type="password"
						value={data.password}
						onChange={(e) => setData("password", e.target.value)}
						className="input"
					/>
					{errors.password && (
						<div className="text-red-500">{errors.password}</div>
					)}
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					disabled={processing}>
					Login
				</button>
			</form>
		</div>
	);
}
