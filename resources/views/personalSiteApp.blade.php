<!doctype html>

<html lang="{{ app()->getLocale() }}">

<head>
    <title>
        hamisor
    </title>

    {{--META--}}
    <meta name="viewport"  content="width=device-width, initial-scale=1.0">
    {{--https://laravel.com/docs/5.6/csrf#csrf-x-csrf-token--}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{--CSS--}}
    <link property="stylesheet" rel="stylesheet" type="text/css" href="{{asset('css/appHarness.css')}}"/>
</head>

<body>
    <div id="reactApp"></div>
</body>

{{--APP JS--}}
<script defer type="application/javascript" src="{{asset('js/appHarness.js')}}"></script>

</html>
