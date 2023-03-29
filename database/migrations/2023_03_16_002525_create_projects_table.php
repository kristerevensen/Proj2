<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('project_name');
            $table->string('project_url');
            $table->string('timezone')->default('UTC');
            $table->text('project_description')->nullable();
            $table->enum('project_type', ['web', 'mobile', 'desktop', 'app']);
            $table->enum('project_category', ['e-commerce', 'social', 'blog', 'portfolio', 'personal', 'brand', 'content', 'information', 'intranet', 'extranet', 'saas', 'paas', 'iaas', 'app']);
            $table->unsignedBigInteger('project_account_id');
            $table->unsignedBigInteger('project_owner_id');
            $table->json('project_access_users')->nullable(); //må lanskje byttes til tekst hvis json ikke funker
            $table->timestamp('project_start_date')->nullable();
            $table->timestamp('project_end_date')->nullable();
            $table->enum('project_status', ['active', 'completed', 'deleted'])->default('active');
            $table->unsignedBigInteger('project_created_by');
            $table->unsignedBigInteger('project_updated_by')->nullable();
            $table->unsignedBigInteger('project_deleted_by')->nullable();
            $table->timestamp('project_created_at')->nullable();
            $table->timestamp('project_updated_at')->nullable();
            $table->timestamp('project_deleted_at')->nullable();
            $table->string('project_api_token')->nullable();
            $table->timestamps();

            $table->foreign('project_account_id')->references('id')->on('accounts');
            $table->foreign('project_owner_id')->references('id')->on('users');
            $table->foreign('project_created_by')->references('id')->on('users');
            $table->foreign('project_updated_by')->references('id')->on('users');
            $table->foreign('project_deleted_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
