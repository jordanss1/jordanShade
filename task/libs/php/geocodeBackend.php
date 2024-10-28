<?php
    ini_set("display_errors", true);
    header('Content-Type: application/json');

    $ch = curl_init();
    $url = 'https://secure.geonames.org/';

    function postData($url, $property = false) 
    {
        global $ch;

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, $url);
        
        $server_response = json_decode(curl_exec($ch), true);

        $output['status']['code'] = "200";
        $output['status']['name'] = "ok";
        $output['status']['description'] = "success";
        $output['data'] = $property ? $server_response[$property] : $server_response;

        echo json_encode($output);
    }

    if (isset($_POST["searchTerm"])) {
        $url = $url . "searchJSON?q=" . urlencode($_POST["searchTerm"]) . "&maxRows=5&username=jordanss";
        
        postData($url, "geonames");
    }

    if (isset($_POST["postalCode"])) {
        $url = $url . "findNearbyPostalCodesJSON?postalcode=" . urlencode($_POST["postalCode"]) . "&radius=30&country=US&username=jordanss";

        postData($url);
    }

    if (isset($_POST["wikipediaSearch"])) {
        $url = $url . "wikipediaSearchJSON?q=" . urlencode($_POST["wikipediaSearch"]) . "&maxRows=5&username=jordanss";

        postData($url, "geonames");
    }


    curl_close($ch);
?>