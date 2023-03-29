<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $table = 'accounts';


    protected $fillable = [
        'account_id',
        'account_name', //name of the organisation
        'account_email', //primary contact for the account
        'account_owner', //user_id of the account owner
        'account_phone', //primary contact for the account
        'account_address', //contact address for the account
        'account_city',  //city address for the account
        'account_state',  //state address for the account, nullable
        'account_zip', //zip address for the account, nullable
        'account_country', //country address for the account
        'account_website', //website address for the account
        'account_description', //description of the account
        'account_logo', //logo of the account
        'account_status', //active or inactive or delete
        'account_access', //array of user_id that have access to the account
        'account_created_at', //date of account creation
        'account_updated_at', //date of account update
        'account_deleted_at', //date of account deletion
        'created_by', //user_id of the user who created the account
        'updated_by', //user_id of the user who updated the account
        'deleted_by', //user_id of the user who deleted the account
        'api_token' //api token for the account
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
