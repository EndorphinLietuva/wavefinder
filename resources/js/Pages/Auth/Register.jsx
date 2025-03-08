import { useForm } from "@inertiajs/react";

export default function Register() {
	const { data, setData, post, processing, errors } = useForm({
		name: "",
		email: "",
		password: "",
		password_confirmation: ""
	});

	const submit = (e) => {
		e.preventDefault();
		post(route("register"));
	};

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Register</h1>
			<form onSubmit={submit}>
				<div className="mb-4">
					<label className="block">Name</label>
					<input
						type="text"
						value={data.name}
						onChange={(e) => setData("name", e.target.value)}
						className="input"
					/>
					{errors.name && (
						<div className="text-red-500">{errors.name}</div>
					)}
				</div>
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
				<div className="mb-4">
					<label className="block">Confirm Password</label>
					<input
						type="password"
						value={data.password_confirmation}
						onChange={(e) =>
							setData("password_confirmation", e.target.value)
						}
						className="input"
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					disabled={processing}>
					Register
				</button>
			</form>
		</div>
	);
}
