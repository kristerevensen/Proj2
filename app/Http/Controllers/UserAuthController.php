<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function signup(SignupRequest $request) {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;

        return $this->respondWithToken($token);

        return response(
            [
                'user' => $user,
                'token' => $token,
            ]
        );
    }

    public function login(LoginRequest $request) {
        $credentials = $request->validated();
        $remember = $request->remember_me ?? false;
        unset($credentials['remember_me']);

        if(!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'Unauthorized'
            ], 422);
        }
        $user = Auth::user();
        $token = bin2hex(random_bytes(32));

        return response([
            'user' => $user,
            'token' => $token,
        ]);

    }

    // public function logout() {
    //     $user = Auth::user();
    //     auth()->logout();
    //     $user->tokens()->delete();
    //     return response([
    //         'success' => 'true'
    //     ]);
    // }
}
