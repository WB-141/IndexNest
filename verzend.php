<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $naar = "info@indexnest.nl";

    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $onderwerp = htmlspecialchars($_POST["onderwerp"] ?? "");
    $vraag = htmlspecialchars($_POST["vraag"] ?? "");

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Ongeldig e-mailadres.");
    }

    if (preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $onderwerp)) {
        die("Header injectie gedetecteerd.");
    }

    echo "Formulier ontvangen van: $email";

    $bericht = "Bericht ontvangen van: $email\n\nOnderwerp: $onderwerp\n\nVraag:\n$vraag";

    $headers = "From: $email";

    mail($naar, $onderwerp, $bericht, $headers);
}
?>