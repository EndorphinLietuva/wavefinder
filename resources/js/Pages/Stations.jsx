import { Link } from "@inertiajs/react";
import { useRoute } from "ziggy-js";
export default function Stations({ stations }) {
	const route = useRoute();
	return (
		<>
			<h1>Stations</h1>
			<ul className="space-y-2">
				{stations.data.map((station) => (
					<li
						key={station.stationuuid}
						className="p-3 border rounded text-center">
						<Link
							href={route("stations.show", station.stationuuid)}>
							{station.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
