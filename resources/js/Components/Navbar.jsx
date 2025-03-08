import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
	const { auth } = usePage().props;

	return (
		<div>
			<div className="navbar bg-base-100 shadow-sm">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li>
								<Link href="/stations">Browse</Link>
							</li>
							<li>
								<Link>Random Station</Link>
							</li>
							<li>
								<Link>TBA</Link>
								<ul className="p-2">
									<li>
										<Link>Submenu 1</Link>
									</li>
									<li>
										<Link>Submenu 2</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<Link href="/" className="btn btn-ghost text-xl">
						Wavefinder
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href="/stations">Browse</Link>
						</li>
						<li>
							<Link>Random Station</Link>
						</li>
						<li>
							<details>
								<summary>TBA</summary>
								<ul className="p-2 z-20">
									<li>
										<Link>Submenu 1</Link>
									</li>
									<li>
										<Link>Submenu 2</Link>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					{auth.user ? (
						<>
							<span className="mr-4">
								Hello, {auth.user.name}
							</span>
							<Link
								href={route("logout")}
								method="post"
								as="button"
								className="btn mx-2">
								Logout
							</Link>
							<Link
								href={route("profile")}
								className="btn btn-primary mx-2">
								Profile
							</Link>
						</>
					) : (
						<>
							<Link href={route("login")} className="btn mx-2">
								Log in
							</Link>
							<Link
								href={route("register")}
								className="btn btn-primary mx-2">
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
