<?php

$webhook = "https://discordapp.com/api/webhooks/692406736904257586/REDACTED";

$email = $_POST["email"];
$name = $_POST["name"];
$text = $_POST["text"];

$ch = curl_init();

$payload = json_encode(
	array(
		"content"=>"<@564884685449330699>",
		"embeds" => array(array(
			"title"=>"Contact Form",
			"color"=>0x006eff,
			"fields"=> array(
				array(
					"name"=>"Name",
					"value"=>$name,
					"inline"=>true
				),
				array(
					"name"=>"Email",
					"value"=>$email,
					"inline"=>true
				),
				array(
					"name"=>"Text",
					"value"=>$text
				)
			)
		)
	))
);

$payload = str_replace("\n","",$payload);
curl_setopt($ch, CURLOPT_URL, $webhook);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload ); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
$output = curl_exec($ch);
$result = json_decode($output);

$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (floor($status / 100) != 2 || $result->message) {
	http_response_code(400);
	header('Content-Type: application/json');
	curl_close($ch);
	exit($output);
} else {
	http_response_code(200);
	curl_close($ch);
}


?>
