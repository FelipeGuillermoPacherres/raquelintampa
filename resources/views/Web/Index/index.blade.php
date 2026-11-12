@extends('Layouts.web-template')

@section('seo')
    <title>{{ ($lang ?? 'en') === 'es'
        ? 'Raquel in Tampa | Belleza, bienestar y cuidado postoperatorio en Tampa, FL'
        : 'Raquel in Tampa | Beauty, Wellness & Post-Op Care in Tampa, FL' }}</title>
    <meta property="og:title" content="{{ ($lang ?? 'en') === 'es'
        ? 'Raquel in Tampa | Belleza, Masajes y Postoperatorio'
        : 'Raquel in Tampa | Beauty, Massage & Post-Op Care' }}">
    <meta property="og:image" content="{{ asset('img/og.png') }}">
    <meta
        name="description"
        content="{{ ($lang ?? 'en') === 'es'
        ? 'Cabello, uñas, faciales, depilación, masajes y drenaje linfático en Tampa. Cuidado postoperatorio y atención a domicilio. Reserva tu cita online.'
        : 'Hair, nails, facials, waxing, massage and lymphatic drainage in Tampa. Personalized post-op care and mobile appointments. Book online.' }}"
    >
    <meta
        name="keywords"
        content="Raquel in Tampa, salón de belleza Tampa, cabello, uñas, faciales, depilación, masajes, drenaje linfático, cuidado postoperatorio, beauty studio Tampa, hair services, nails, facials, waxing, massage, lymphatic drainage, post-op care"
    >

    <!--<link rel="canonical" href="https://heavenlyhairfl.com/"> -->
@endsection

@section('content')
    <div id="index" data-url="{{ url('/') }}" data-lang="{{ $lang }}"></div>
@endsection
