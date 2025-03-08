import { Link } from "@inertiajs/react";

export default function Profile({ user }) {
	return (
		// profile with name and email
		<div>
			<h1 className="text-2xl font-bold mb-4">Profile</h1>
			<div className="mb-6">
				<div className="mb-2">
					<span className="font-semibold">Name:</span>
					<span className="ml-2 font-mono">{user.name}</span>
				</div>
				<div className="mb-2">
					<span className="font-semibold">Email:</span>
					<span className="ml-2 font-mono">{user.email}</span>
				</div>
			</div>
		</div>
	);
}
