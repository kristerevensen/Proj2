<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WebsiteOptimizationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'type' => 'required|max:50',
            'description' => 'required',
            'category' => 'required|max:50',
            'pageType' => 'required|max:50',
            'subject' => 'required|max:50',
        ];
    }
}
