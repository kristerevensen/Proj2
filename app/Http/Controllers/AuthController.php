<?php

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{
    public function signup(SignupRequest $request) {
        $data = $request->validated();
        $user = User::create($request->all());

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;

        return $this->respondWithToken($token);

        return response(
            [
                'user' => $user,
                'token' => $token,
            ],
            201
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
        $token = $user->createToken('auth_token')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ]);

    }
    public function logout() {
        $user = Auth::user();
        auth()->logout();
        $user->currentAccessToken()->delete();
        return response([
            'success' => 'true'
        ]);
    }

}
