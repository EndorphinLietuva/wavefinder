export default function Stations({ stations }) {
	console.log(stations);
	return (
		<>
			<h1>Stations</h1>
			<ul>
				{stations.data.map((station) => (
					<li key={station.stationuuid}>{station.name}</li>
				))}
			</ul>
		</>
	);
}
