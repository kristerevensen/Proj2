<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('account_id')->unique();
            $table->string('account_name');
            $table->string('account_email');
            $table->unsignedBigInteger('account_owner');
            $table->string('account_phone');
            $table->string('account_address');
            $table->string('account_city');
            $table->string('account_state')->nullable();
            $table->string('account_zip')->nullable();
            $table->string('account_country');
            $table->string('account_website');
            $table->text('account_description');
            $table->string('account_logo')->nullable();
            $table->enum('account_status', ['active', 'inactive', 'delete'])->default('active');
            $table->json('account_access')->nullable();
            $table->timestamp('account_created_at')->nullable();
            $table->timestamp('account_updated_at')->nullable();
            $table->timestamp('account_deleted_at')->nullable();
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->string('api_token')->nullable();
            $table->timestamps();

            $table->foreign('account_owner')->references('id')->on('users');
            $table->foreign('created_by')->references('id')->on('users');
            $table->foreign('updated_by')->references('id')->on('users');
            $table->foreign('deleted_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}
