<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $naar = "info@indexnest.nl";

    $email = $_POST["email"] ?? "";
    $onderwerp = $_POST["onderwerp"] ?? "";
    $vraag = $_POST["vraag"] ?? "";

    echo "Formulier ontvangen van: $email";

    $bericht = "$mail ontvangen van: $email\n\nonderwerp\ne\n$vraag";

    mail($naar, $onderwerp, $bericht);
}
?>