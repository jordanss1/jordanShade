<?php
    ini_set("display_errors", true);
    header('Content-Type: application/json');

    if (isset($_POST["searchTerm"])) {
        echo "<script>console.log(" . $_POST["searchTerm"] . ");</script>";
    }

    echo json_encode("hey");


?>