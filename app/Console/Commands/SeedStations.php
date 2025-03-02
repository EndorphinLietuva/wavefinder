<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;

// ! VELIAU PADARYTI SERVICE NORMALIAI
class SeedStations extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = "radio:seed-stations";

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = "Command description";

	/**
	 * API endpoint for radio stations.
	 *
	 * @var string
	 */
	protected $apiUrl = "";

	/**
	 * HTTP client instance.
	 *
	 * @var Client
	 */
	protected $client;

	/**
	 * Execute the console command.
	 */
	public function handle()
	{
		$this->info("Starting to fetch radio stations...");
		$this->apiUrl = Cache::get("radio.fastest_dns");
		if (!$this->apiUrl) {
			$this->error(
				'No fastest DNS server found. Run the "radio:find-dns" command first.'
			);
			return 1;
		}

		$this->apiUrl = $this->apiUrl . "/json/stations";
		$chunkSize = 10000;
		$offset = 0;
		$timeout = 5;
		if (config("app.debug")) {
			$timeout = 30;
		}
		$client = new Client([
			"timeout" => $timeout
		]);

		$allFilteredStations = collect();

		while (true) {
			$response = $client->get($this->apiUrl, [
				"query" => [
					"limit" => $chunkSize,
					"offset" => $offset
				]
			]);

			$stations = json_decode($response->getBody(), true);
			$type = gettype($stations);

			$this->info("The variable type is: " . $type);

			// Convert the batch to a collection and apply the stacked filters.
			$filteredStations = collect($stations)->filter(function ($station) {
				return $this->applyFilters($station);
			});

			// Merge the filtered batch into the final collection.
			$allFilteredStations = $allFilteredStations->merge(
				$filteredStations
			);

			if (config("app.debug")) {
				if (count($allFilteredStations) > 5000) {
					break;
				}
			}

			// If fewer stations than the limit were returned, we've reached the end.
			if (count($stations) < $chunkSize) {
				break;
			}

			$offset += $chunkSize;
		}

		$this->info(
			"Total filtered stations: " . $allFilteredStations->count()
		);
		$this->info("Radio stations fetched and filtered successfully.");

		// TODO: saugoti i db

		return 0;
	}

	/**
	 * Apply all filters to a station.
	 *
	 * @param array $station
	 * @return bool
	 */
	protected function applyFilters(array $station): bool
	{
		return true;
		// return $this->filterByFavicon($station) && $this->filterByCountry($station);
	}

	/**
	 * Filter: Only include stations that have a favicon.
	 *
	 * @param array $station
	 * @return bool
	 */
	protected function filterByFavicon(array $station): bool
	{
		return !empty($station["favicon"]);
	}

	/**
	 * Filter: Only include stations from the United States.
	 *
	 * @param array $station
	 * @return bool
	 */
	protected function filterByCountry(array $station): bool
	{
		return isset($station["country"]) &&
			$station["country"] === "United States";
	}
}
