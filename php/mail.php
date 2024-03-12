<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";
$recipient = "lukas@svobs.cz";
$subject = "Nová žádost o úklid!";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="cs">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Úklidové služby - Děkuji vám</title>
        <meta name="description" content="Profesionální a spolehlivý úklid přizpůsobený vašim potřebám. Pravidelný a generální úklid bytových domů, kanceláří a společných prostor s osobním přístupem a odbornou péčí.">
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
        
        <script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"></script>
        <script src="/js/counter.js"></script>
        <script src="/js/animations.js"></script>

        <link rel="stylesheet" href="/styles/main-style.css">
        <!-- Google font: Poppins -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
        <!-- Google font: Icons & Materials -->
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    </head>
  
    <body>
    
        <!-- NAVBAR -->
        <header class="navbar">
        <div class="container">
            <div class="row space-between">
            <a class="logo-container" href="index.html"><img class="navbar-logo" src="/images/uklidove-sluzby-logo-horizontal-color.svg"></a>
            <div class="row center hide">
                <div class="navbar-menu">
                <a href="#o-mne">O&nbsp;mně</a>
                <a href="#sluzby">Služby</a>
                <a href="#reference">Reference</a>
                </div>
                <a class="button--primary hide" href="#kontakt">Kontakt</a>
            </div>
            </div>
        </div>
        </header>
        
        <!-- HERO -->
        <section class="hero bg-pink text-blue z-1">
        <div class="container">
            <div class="content left animation--parallax">
            <h1 class="animation--fadeInFromSide">Děkuji vám! V nejbližší době se vás budu kontaktovat!</h1>
            <a class="button--primary animation--fadeInFromBottom d-3" href="index.html">Zpět na domovskou stránku</a>
            </div>
        </div>
        <div class="wave-container">
            <svg class="w-100 fill-light" viewBox="0 0 1440 256">
            <path fill-opacity="1" d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,181.3C480,203,549,181,617,160C685.7,139,754,117,823,128C891.4,139,960,181,1029,181.3C1097.1,181,1166,139,1234,128C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </div>
        </section>
    
    </body>
  
</html>

';

?>