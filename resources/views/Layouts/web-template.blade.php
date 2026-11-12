<!DOCTYPE html>
<html lang="{{ $lang }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @yield('seo')
    <meta property="og:type" content="website">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="{{ ($lang ?? 'en') === 'es'
        ? 'Raquel in Tampa | Belleza, Masajes y Postoperatorio'
        : 'Raquel in Tampa | Beauty, Massage & Post-Op Care' }}">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('img/favicon.png') }}" type="image/x-icon">


    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KMW0NFHP3L"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-KMW0NFHP3L');
    </script>
</head>
<body>

<div id="header" data-url="{{ url('/') }}" data-path="{{ request()->path() }}" data-lang="{{ session('lang', 'en') }}"></div>

<section class="main-content">
    @yield('content')
</section>

<div id="footer" data-url="{{ url('/') }}" data-path="{{ request()->path() }}" data-lang="{{ session('lang', 'en') }}"></div>

</body>
</html>
