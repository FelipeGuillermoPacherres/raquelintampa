<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function index(Request $request)
    {
        if (! $request->session()->has('lang')) {
            $browserLang = strtolower(substr(
                $request->header('Accept-Language', 'en'),
                0,
                2
            ));

            $request->session()->put(
                'lang',
                $browserLang === 'es' ? 'es' : 'en'
            );
        }

        return view('Web.Index.index', [
            'lang' => $request->session()->get('lang'),
        ]);
    }

    public function booking()
    {
        return redirect()->away(
            'https://book.squareup.com/appointments/affgyfnhb0cv20/location/LRGF7ZNZY7CKB/services',
            302
        );
    }
}
