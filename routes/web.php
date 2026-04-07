<?php

use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MessageController::class, 'index']);
Route::post('/send', [MessageController::class, 'send']);
