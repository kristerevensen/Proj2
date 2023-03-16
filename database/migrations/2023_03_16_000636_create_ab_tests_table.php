<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ab_tests', function (Blueprint $table) {
            $table->id();
            $table->string('jira_id');
            $table->string('test_name');
            $table->string('type');
            $table->string('page_type');
            $table->string('category');
            $table->date('start');
            $table->date('end')->nullable();
            $table->text('hypothesis');
            $table->unsignedTinyInteger('impact');
            $table->unsignedTinyInteger('confidence');
            $table->unsignedTinyInteger('ease');
            $table->string('primary_metric');
            $table->string('secondary_metric')->nullable();
            $table->string('variation');
            $table->string('url');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ab_tests');
    }
}
