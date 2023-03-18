<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Account;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class AccountController extends Controller
{
    // Create a new account for a user
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|unique:accounts,user_id',
            'account_number' => 'required|string|unique:accounts,account_number',
            'balance' => 'required|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $account = Account::create($request->all());

        return response()->json(['message' => 'Account created successfully', 'data' => $account], 201);
    }

    // Get a user's account details
    public function show(int $user_id)
    {
        $account = Account::where('user_id', $user_id)->first();

        if (!$account) {
            return response()->json(['error' => 'Account not found'], 404);
        }

        return response()->json(['data' => $account]);
    }

    // Update a user's account details
    public function update(Request $request, int $user_id)
    {
        $account = Account::where('user_id', $user_id)->first();

        if (!$account) {
            return response()->json(['error' => 'Account not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'account_number' => 'string|unique:accounts,account_number,' . $account->id,
            'balance' => 'numeric|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $account->update($request->all());

        return response()->json(['message' => 'Account updated successfully', 'data' => $account]);
    }

    // Delete a user's account
    public function destroy(int $user_id)
    {
        $account = Account::where('user_id', $user_id)->first();

        if (!$account) {
            return response()->json(['error' => 'Account not found'], 404);
        }

        $account->delete();

        return response()->json(['message' => 'Account deleted successfully']);
    }
}

