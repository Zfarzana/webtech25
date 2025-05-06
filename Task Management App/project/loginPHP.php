<?php
if (isset($_POST['user_name']) && isset($_POST['password'])) {
    $username = $_POST['user_name'];
    $password = $_POST['password'];

    // Example: Static username and password check (you can replace this with DB check)
    $correctUsername = "admin";
    $correctPassword = "1234"; // Never store real passwords like this in production

    if ($username === $correctUsername && $password === $correctPassword) {
        // Login successful — redirect to admin page
        header("Location: admin.html");
        exit;
    } else {
        // Login failed — redirect back to login page
        echo "<script>alert('Incorrect username or password'); window.location.href='login.html';</script>";
        exit;
    }
} else {
    // Form not submitted properly — redirect to login page
    header("Location: login.html");
    exit;
}
