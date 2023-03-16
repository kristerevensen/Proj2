<?php   

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbTest extends Model
{
    use HasFactory;

    protected $table = 'ab_tests';

    protected $fillable = [
        'jira_id',
        'test_name',
        'type',
        'page_type',
        'category',
        'start',
        'end',
        'hypothesis',
        'impact',
        'confidence',
        'ease',
        'primary_metric',
        'secondary_metric',
        'variation',
        'url',
        'notes',
    ];

    // Add any necessary relationships here.
}
