<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RadioStationController;

Route::get("/", function () {
	// ! Temp
	$testRadioStation = \App\Models\RadioStation::first();
	return inertia("Home", ["radioStation" => $testRadioStation]);
});

Route::get("/testdaisy", function () {
	return view("testdaisy");
});

//resource route inertia for radio stations
Route::resource("stations", RadioStationController::class);
