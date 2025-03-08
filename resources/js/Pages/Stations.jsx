import { Link } from "@inertiajs/react";
import { useRoute } from "ziggy-js";

// Fallback icon URL from Icons8
const fallbackIcon = "https://img.icons8.com/ios-filled/150/000000/radio.png";

export default function Stations({ stations }) {
	const route = useRoute();
	return (
		<>
			<h1 className="text-center">Stations:</h1>
			<ul className="grid grid-cols-6 gap-4">
				{stations.data.map((station) => (
					<li
						key={station.stationuuid}
						className="flex flex-col items-center">
						<Link
							href={route("stations.show", station.stationuuid)}>
							<div className="w-full aspect-square rounded-lg flex items-center justify-center">
								<img
									src={station.favicon || fallbackIcon}
									alt={`${station.name} favicon`}
									className="w-24 h-24 object-contain"
									onError={(e) => {
										if (e.target.src !== fallbackIcon) {
											e.target.src = fallbackIcon;
										}
									}}
								/>
							</div>
						</Link>
						<div className="mt-2 text-center">{station.name}</div>
					</li>
				))}
			</ul>
		</>
	);
}
