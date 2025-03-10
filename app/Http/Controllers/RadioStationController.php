<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\RadioStation;

class RadioStationController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		// load 10 radio stations
		$radioStations = RadioStation::paginate(10);
		return inertia("Stations", ["stations" => $radioStations]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id)
	{
		$radioStation = RadioStation::findOrFail($id); // Use findOrFail for 404
		return inertia("Station", ["radioStation" => $radioStation]);
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(string $id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, string $id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(string $id)
	{
		//
	}
}
