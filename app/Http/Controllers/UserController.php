<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
	public function profile()
	{
		$user = Auth::user();
		return inertia("Profile", [
			"user" => [
				"name" => $user->name,
				"email" => $user->email
			]
		]);
	}
}
