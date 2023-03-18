<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return response()->json(['projects' => $projects]);
    }

    public function store(Request $request)
    {
        dump($request->all());
        die();
        $validator = Validator::make($request->all(), [
            'account_id' => 'required|integer|exists:accounts,id',
            'name' => 'required|string|max:255',
            'url' => 'required|string|max:255',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
    
        $project = Project::create($request->all());
    
        return response()->json(['message' => 'Project created successfully', 'data' => $project], 201);
    }
    
}
