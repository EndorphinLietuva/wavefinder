// resources/js/Pages/Stations/Show.jsx
import { Link } from "@inertiajs/react";

export default function Show({ radioStation }) {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">{radioStation.name}</h1>

			<div className="mb-6">
				<div className="mb-2">
					<span className="font-semibold">Station UUID:</span>
					<span className="ml-2 font-mono">
						{radioStation.stationuuid}
					</span>
				</div>

				<div className="mb-2">
					<span className="font-semibold">Stream URL:</span>
					<span className="ml-2">{radioStation.url}</span>
				</div>

				{radioStation.tags && (
					<div>
						<span className="font-semibold">Tags:</span>
						<span className="ml-2">{radioStation.tags}</span>
					</div>
				)}
			</div>

			<div className="actions">
				<Link
					href={route("stations.index")}
					className="btn btn-primary px-4 py-2 rounded">
					&larr; Back to All Stations
				</Link>
			</div>
		</div>
	);
}
