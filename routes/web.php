<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RadioStationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\UserController;

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

Route::get("/login", [LoginController::class, "showLoginForm"])->name("login");
Route::post("/login", [LoginController::class, "login"]);
Route::post("/logout", [LoginController::class, "logout"])->name("logout");

Route::get("/register", [
	RegisterController::class,
	"showRegistrationForm"
])->name("register");
Route::post("/register", [RegisterController::class, "register"]);

Route::get("/profile", [UserController::class, "profile"])->name("profile");
