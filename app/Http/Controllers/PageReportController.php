<?php

namespace App\Http\Controllers;

use App\Models\PageReport;
use Illuminate\Http\Request;

class PageReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            '*.page' => 'required|string',
            '*.pageviews' => 'required|integer',
            '*.avg_time_on_page' => 'required|numeric',
            '*.entrances' => 'required|integer',
            '*.bounce_rate' => 'required|numeric',
            '*.exit_rate' => 'required|numeric',
            '*.page_value' => 'required|numeric',
        ]);

        foreach ($data as $report) {
            PageReport::create($report);
        }

        return response()->json(['message' => 'Data saved successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(PageReport $pageReport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PageReport $pageReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PageReport $pageReport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PageReport $pageReport)
    {
        //
    }
}
