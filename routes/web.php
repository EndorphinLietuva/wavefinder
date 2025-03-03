<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
	// ! Temp
	$testRadioStation = \App\Models\RadioStation::first();
	return inertia("Home", ["radioStation" => $testRadioStation]);
});

Route::get("/testdaisy", function () {
	return view("testdaisy");
});
