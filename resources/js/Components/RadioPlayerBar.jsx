import React, { useState, useEffect, useRef } from "react";
import { Howl } from "howler";

const RadioPlayerBar = ({ station }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(50);
	const soundRef = useRef(null);

	// Initialize Howl only once or when station.url_resolved changes
	useEffect(() => {
		soundRef.current = new Howl({
			src: [station.url_resolved], // Ensure this is an array, as Howl expects one
			html5: true, // Enables streaming large files
			volume: volume / 100 // Convert percentage to range [0, 1]
		});

		return () => {
			if (soundRef.current) {
				soundRef.current.unload();
			}
		};
	}, [station.url_resolved]); // only re-run if the stream URL changes

	const handlePlayPause = () => {
		if (!soundRef.current) return;

		if (isPlaying) {
			soundRef.current.pause();
		} else {
			soundRef.current.play();
		}
		setIsPlaying((prevState) => !prevState);
	};

	const handleVolumeChange = (event) => {
		const newVolume = parseInt(event.target.value, 10);
		setVolume(newVolume);
		if (soundRef.current) {
			// Update Howl instance's volume (value from 0.0 to 1.0)
			soundRef.current.volume(newVolume / 100);
		}
	};

	return (
		<div className="radio-player-bar bg-base-300 flex justify-between items-center p-4">
			<div className="radio-player-info flex">
				<img
					src={station.favicon}
					alt={`${station.name} icon`}
					className="w-32"
				/>
				<div className="station-info px-2">
					<h4 className="font-bold">{station.name}</h4>
					<p>{station.info}</p>
				</div>
			</div>
			<button className="btn btn-primary" onClick={handlePlayPause}>
				{isPlaying ? "Pause" : "Play"}
			</button>
			<div className="flex items-center space-x-4 px-6">
				<input
					className="range range-xs"
					type="range"
					min="0"
					max="100"
					value={volume}
					onChange={handleVolumeChange}
				/>
				<h6 className="w-2">{volume}%</h6>
			</div>
		</div>
	);
};

export default RadioPlayerBar;
