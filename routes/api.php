<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TrackingController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\ExcelController;
use App\Http\Controllers\PageReportController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// routes/api.php


Route::post('/page-reports', [PageReportController::class, 'store']);

Route::get('auth', [AuthController::class, 'redirectToAuth']);
Route::get('auth/callback', [AuthController::class, 'handleAuthCallback']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/track', [TrackingController::class, 'track']);
Route::post('/store_project', [ProjectController::class, 'store']);
Route::get('/list_projects', [ProjectController::class, 'index']); 
Route::post('/upload-excel', [ExcelController::class, 'store']);

Route::post('/accounts', [AccountController::class, 'store']);
Route::get('/accounts/{user_id}', [AccountController::class, 'show']);
Route::put('/accounts/{user_id}', [AccountController::class, 'update']);
Route::delete('/accounts/{user_id}', [AccountController::class, 'destroy']);


