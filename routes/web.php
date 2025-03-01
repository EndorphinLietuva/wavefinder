<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/testdaisy', function () {
    return view('testdaisy');
});
