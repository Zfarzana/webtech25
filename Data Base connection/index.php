<?php
// Database connection
$servername = "localhost";
$username = "root";  // Default username for XAMPP
$password = "";      // Default password for XAMPP
$dbname = "test_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Hash the password for security
    $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

    // Insert into database
    $sql = "INSERT INTO users (username, password) VALUES ('$user', '$hashed_pass')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
    <link rel="stylesheet" href="style_db.css">
</head>
<body>

    <div class="container">
        <h2>User Registration</h2>
        <form action="index.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Register</button>
        </form>
    </div>

</body>
</html>
