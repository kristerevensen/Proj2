<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tracking', function (Blueprint $table) {
            $table->id();
            $table->string('sessionId');
            $table->string('clientId');
            $table->string('ipAddress');
            $table->string('referrer')->nullable();
            $table->string('userAgent')->nullable();
            $table->string('language')->nullable();
            $table->boolean('cookieEnabled')->nullable();
            $table->boolean('dntEnabled')->nullable();
            $table->integer('screenWidth')->nullable();
            $table->integer('screenHeight')->nullable();
            $table->string('hostname');
            $table->string('pathname');
            $table->string('hash')->nullable();
            $table->integer('wordCount')->nullable();
            $table->integer('charCount')->nullable();
            $table->float('fcScore')->nullable();
            $table->text('heatmapData')->nullable();
            $table->string('trackType');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracking');
    }
};
