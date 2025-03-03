export default function Home() {
	return (
		<div className="relative flex items-center justify-center overflow-hidden">
			<div className="fixed -z-10 top-0 left-1/2 transform -translate-x-1/3 -translate-y-1/2 flex items-center justify-center">
				<div className="bg-primary w-[1000px] h-[1000px] rounded-full blur-3xl opacity-10"></div>
			</div>
			<div className="relative z-10 mt-20">
				<h1 className="text-center text-4xl font-bold">
					Home Test Text
				</h1>
				<div className="flex flex-row justify-center mt-4">
					<button className="btn">Button</button>
					<button className="btn btn-primary ml-4">Primary</button>
				</div>
			</div>
		</div>
	);
}
