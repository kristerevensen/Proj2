<?php

namespace App\Http\Controllers;

use App\Models\WebsiteOptimization;
use App\Http\Requests\WebsiteOptimizationRequest;
use Illuminate\Http\Request;

class WebsiteOptimizationController extends Controller
{
    public function store(WebsiteOptimizationRequest $request)
    {
        $websiteOptimization = WebsiteOptimization::create($request->validated());
        return redirect()->route('website_optimizations.show', $websiteOptimization->id);
    }

    public function update(WebsiteOptimizationRequest $request, $id)
    {
        $websiteOptimization = WebsiteOptimization::findOrFail($id);
        $websiteOptimization->update($request->validated());
        return redirect()->route('website_optimizations.show', $websiteOptimization->id);
    }

    // Other methods...
}
