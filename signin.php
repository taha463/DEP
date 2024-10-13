<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <h2 class="mt-5">Welcome!</h2>
    <?php
    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve username and password safely
        $username = isset($_POST['username']) ? htmlspecialchars($_POST['username']) : 'Unknown User';
        $password = isset($_POST['password']) ? htmlspecialchars($_POST['password']) : 'No Password Provided'; // For demo only

        // Display the username (and not the password for security reasons)
        echo "<p>Username: $username</p>";
        // Do NOT display the password in a real application
        echo "<p>Password: $password</p>"; // For demonstration purposes only
    } else {
        echo "<p>No data submitted. Please go back and submit the form.</p>";
    }
    ?>
</div>
</body>
</html>
