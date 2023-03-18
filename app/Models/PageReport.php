<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'page',
        'pageviews',
        'avg_time_on_page',
        'entrances',
        'bounce_rate',
        'exit_rate',
        'page_value',
    ];
}