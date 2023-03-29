<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $fillable = [
        'project_name',
        'project_url', //url of the project, specific for web
        'project_description', //description of the project
        'project_type', //type of the project{web, mobile, desktop, marketing, growth, evaluation, app}
        'project_category', //category of the project{e-commerce, social, blog, portfolio, brand, content, information, intranet, extranet, extranet, saas, paas, iaas, app}
        'project_account_id', //account_id
        'project_owner_id', //user_id
        'project_access_users', //array of user_id that have access to the project
        'project_start_date', //start date for active
        'project_end_date', //end date for completed
        'project_status', //active or completed or delete
        'project_created_by', //user_id of the user who created the project
        'project_updated_by', //user_id of the user who updated the project
        'project_deleted_by', //user_id of the user who deleted the project
        'project_created_at', //date the project was created
        'project_updated_at', //date the project was updated
        'project_deleted_at', //date the project was deleted
        'project_api_token', //api token for the project
    ];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
