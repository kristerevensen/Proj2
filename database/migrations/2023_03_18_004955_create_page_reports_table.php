<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageReportsTable extends Migration
{
    public function up()
    {
        Schema::create('page_reports', function (Blueprint $table) {
            $table->id();
            $table->text('page');
            $table->integer('pageviews');
            $table->float('avg_time_on_page');
            $table->integer('entrances');
            $table->float('bounce_rate');
            $table->float('exit_rate');
            $table->float('page_value');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('page_reports');
    }
}