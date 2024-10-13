<?php
$host = 'localhost';
$user = 'root'; // Default user
$password = ''; // Leave empty for default setup
$dbname = 'user_db';

// Create connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
