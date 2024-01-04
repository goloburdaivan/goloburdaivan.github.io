<?php
$server = env('SERVER');
$username = env('USERNAME');
$password = env('PASWORD');
$database = env('DATABASE');

if ($_SERVER["REQUEST_METHOD"] != "GET"){
    echo json_encode(['message' => 'Invalid request method']);
    die();
}

$sql = "SELECT * FROM tabs;";
$connection = new mysqli($server, $username, $password, $database);
$result = $connection->query($sql);
$data = array();

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

$json = json_encode($data);
header('Content-Type: application/json');

echo $json;
?>