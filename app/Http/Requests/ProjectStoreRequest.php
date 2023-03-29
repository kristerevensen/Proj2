<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProjectStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->user()->id,
        ]);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'project_name' => ['required', 'string', 'max:255'],
            'project_url' => ['required', 'url', 'max:255'],
            'timezone' => ['nullable', 'string', 'max:255'],
            'project_description' => ['nullable', 'string'],
            'project_type' => ['required', Rule::in(['web', 'mobile', 'desktop', 'app'])],
            'project_category' => ['required', Rule::in(['e-commerce', 'social', 'blog', 'portfolio', 'personal', 'brand', 'content', 'information', 'intranet', 'extranet', 'saas', 'paas', 'iaas', 'app'])],
            'project_account_id' => ['required', 'exists:accounts,id'],
            'project_owner_id' => ['required', 'exists:users,id'],
            'project_access_users' => ['nullable', 'json'], // array of user_id that have access to the project or use string field if json is not supported
            'project_start_date' => ['nullable', 'date'],
            'project_end_date' => ['nullable', 'date', 'after_or_equal:project_start_date'],
            'project_status' => ['required', Rule::in(['active', 'completed', 'deleted'])],
            'project_created_by' => ['required', 'exists:users,id'],
            'project_updated_by' => ['nullable', 'exists:users,id'],
            'project_deleted_by' => ['nullable', 'exists:users,id'],
            'project_created_at' => ['nullable', 'date'],
            'project_updated_at' => ['nullable', 'date'],
            'project_deleted_at' => ['nullable', 'date'],
            'project_api_token' => ['nullable', 'string', 'max:255'],
        ];
    }
}
