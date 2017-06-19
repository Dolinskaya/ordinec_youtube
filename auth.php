<?php
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	
	header("Content-Type: application/json");

if (isset($_GET['method'])) {

    $method = $_GET['method'];
    $params;

    switch($method) {
        case 'getAccessToken':

            if (isset($_POST['login']) && isset($_POST['password'])) {
                $params = 'grant_type=password&client_id=system&client_secret=testpass&username=' . $_POST['login'] . '&password=' . $_POST['password']. '&verifyCode='. (isset($_POST['verifyCode']) ? $_POST['verifyCode'] : '');
            }

            break;

        case 'refreshAccessToken':

            if (isset($_POST['access_token'])) {
                $params = 'grant_type=refresh_token&client_id=system&client_secret=testpass&refresh_token=' . $_POST['access_token'];
            }

            break;
    }

    if (!empty($params)) {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://auth2.ordinec.ru/oauth2/token');
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);

        echo curl_exec($ch);

        curl_close($ch);
    }

}
