<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrackingController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\ExcelController;
use App\Http\Controllers\PageReportController;
use App\Http\Controllers\AuthController;



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


//Route::post('/page-reports', [PageReportController::class, 'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout' , [AuthController::class, 'logout']);
    Route::apiResource('projects', ProjectController::class);
});


Route::post('/login', [AuthController ::class, 'login']);
Route::post('/signup', [AuthController::class, 'signup']);



// Route::post('/track', [TrackingController::class, 'track']);
// Route::post('/store_project', [ProjectController::class, 'store']);
// Route::get('/list_projects', [ProjectController::class, 'index']);
// Route::post('/upload-excel', [ExcelController::class, 'store']);

// Route::post('/accounts', [AccountController::class, 'store']);
// Route::get('/accounts/{user_id}', [AccountController::class, 'show']);
// Route::put('/accounts/{user_id}', [AccountController::class, 'update']);
// Route::delete('/accounts/{user_id}', [AccountController::class, 'destroy']);


