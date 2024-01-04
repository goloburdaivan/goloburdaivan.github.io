<?php
$server = env('SERVER');
$username = env('USERNAME');
$password = env('PASWORD');
$database = env('DATABASE');

if ($_SERVER["REQUEST_METHOD"] != "POST"){
    echo json_encode(['message' => 'Invalid request method']);
    die();
}

$tab_title = $_POST['tab_title'];
$tab_content = strip_tags($_POST['tab_content']);

if (mb_strlen($tab_title) > 255) {
    echo json_encode(['message' => 'Invalid tab title length. 255 is max length of string']);
}

$sql = "INSERT INTO tabs (title, tab_content) VALUES ('$tab_title', '$tab_content')";
$connection = new mysqli($server, $username, $password, $database);

if ($connection->query($sql)) {
    echo json_encode(['message' => 'Data successfully added to database']);
}

?>