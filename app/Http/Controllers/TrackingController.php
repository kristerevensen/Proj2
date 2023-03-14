<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TrackingController extends Controller
{
    public function track(Request $request)
    {
        // Get the tracking data from the request
        $trackingData = $request->input('trackingData');

        // Store the tracking data in the database
        DB::table('tracking_data')->insert([
            'client_id' => $trackingData['clientId'],
            'page_url' => $trackingData['page_url'],
            'page_title' => $trackingData['page_title'],
            'page_description' => $trackingData['page_description'],
            'referrer' => $trackingData['referrer'],
            'user_agent' => $trackingData['userAgent'],
            'language' => $trackingData['language'],
            'cookie_enabled' => $trackingData['cookieEnabled'],
            'dnt_enabled' => $trackingData['doNotTrack'],
            'screen_width' => $trackingData['screenWidth'],
            'screen_height' => $trackingData['screenHeight'],
            'hostname' => $trackingData['hostname'],
            'pathname' => $trackingData['pathname'],
            'time_spent' => $trackingData['timeOnPage'],
            'session_id' => $trackingData['sessionId'],
            'ip_address' => $trackingData['ipAddress'],
            'heatmap_data' => $trackingData['wordCount'],
            'word_count' => $trackingData['heatmapData'],
            'hash' => $trackingData['pageHash'],
            'created_at' => now(),
        ]);

        // Return a success response
        return response()->json(['status' => 'success']);
    }
}
