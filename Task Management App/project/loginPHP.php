<?php
if (isset($_POST['user_name']) && isset($_POST['password'])) {
    $username = $_POST['user_name'];
    $password = $_POST['password'];

  
    $correctUsername = "admin";
    $correctPassword = "1234"; 

    if ($username === $correctUsername && $password === $correctPassword) {
        // Login successful 
        header("Location: admin.html");
        exit;
    } else {
        // Login failed 
        echo "<script>alert('Incorrect username or password'); window.location.href='login.html';</script>";
        exit;
    }
} else {
   
    header("Location: login.html");
    exit;
}
