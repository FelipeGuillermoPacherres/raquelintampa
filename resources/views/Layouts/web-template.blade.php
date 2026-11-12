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

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('img/favicon.png') }}" type="image/x-icon">


    <!-- Vite React -->
    @viteReactRefresh
    @vite(['resources/scss/app.scss', 'resources/js/app.jsx'])

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KMW0NFHP3L"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-KMW0NFHP3L');
    </script>

    <link rel="canonical" href="https://raquelintampa.com/">
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://raquelintampa.com/#business",
    "name": "Raquel in Tampa",
    "url": "https://raquelintampa.com/",
    "telephone": "+18138932326",
    "image": "https://raquelintampa.com/img/og.png",
    "logo": "https://raquelintampa.com/img/logo-1.png",
    "sameAs": [
        "https://www.facebook.com/raquelintampa",
        "https://www.instagram.com/raquelintampa/",
        "https://www.tiktok.com/@raquelintampa"
    ]
}
    </script>
</head>
<body>

<div id="header" data-url="{{ url('/') }}" data-path="{{ request()->path() }}" data-lang="{{ $lang }}"></div>

<section class="main-content">
    @yield('content')
</section>

<div id="footer" data-url="{{ url('/') }}" data-path="{{ request()->path() }}" data-lang="{{ $lang }}"></div>

</body>
</html>
