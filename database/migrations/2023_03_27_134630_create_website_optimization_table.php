<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebsiteOptimizationTable extends Migration
{
    public function up()
    {
        Schema::create('website_optimization', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->text('description');
            $table->string('category');
            $table->string('pageType');
            $table->string('subject');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('website_optimization');
    }
}
