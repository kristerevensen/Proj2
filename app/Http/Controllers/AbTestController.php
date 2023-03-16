<?php

namespace App\Http\Controllers;

use App\Models\AbTest;
use Illuminate\Http\Request;

class AbTestController extends Controller
{
    public function index()
    {
        $abTests = AbTest::all();
        return view('ab_tests.index', compact('abTests'));
    }

    public function create()
    {
        return view('ab_tests.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            // Add validation rules here.
        ]);

        AbTest::create($validatedData);

        return redirect()->route('ab_tests.index')->with('success', 'AB Test created successfully.');
    }

    public function show(AbTest $abTest)
    {
        return view('ab_tests.show', compact('abTest'));
    }

    public function edit(AbTest $abTest)
    {
        return view('ab_tests.edit', compact('abTest'));
    }

    public function update(Request $request, AbTest $abTest)
    {
        $validatedData = $request->validate([
            // Add validation rules here.
        ]);

        $abTest->update($validatedData);

        return redirect()->route('ab_tests.index')->with('success', 'AB Test updated successfully.');
    }

    public function destroy(AbTest $abTest)
    {
        $abTest->delete();
        return redirect()->route('ab_tests.index')->with('success', 'AB Test deleted successfully.');
    }
}
