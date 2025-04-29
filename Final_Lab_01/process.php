<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h2>Form Data Received:</h2>";
    
    echo "First Name: " . htmlspecialchars($_POST['fname']) . "<br>";
    echo "Last Name: " . htmlspecialchars($_POST['lname']) . "<br>";
    echo "ID: " . htmlspecialchars($_POST['id']) . "<br>";
    echo "Email: " . htmlspecialchars($_POST['email']) . "<br>";
    echo "Password: " . htmlspecialchars($_POST['password']) . "<br>";
    echo "Gender: " . htmlspecialchars($_POST['gender']) . "<br>";

    if (isset($_POST['skills'])) {
        echo "Skills: ";
        foreach ($_POST['skills'] as $skill) {
            echo htmlspecialchars($skill) . " ";
        }
        echo "<br>";
    }

    echo "Address: " . htmlspecialchars($_POST['address']) . "<br>";
    echo "Department: " . htmlspecialchars($_POST['department']) . "<br>";

    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        echo "Image uploaded: " . htmlspecialchars($_FILES['image']['name']) . "<br>";
    } else {
        echo "No image uploaded.<br>";
    }
} else {
    echo "No form submitted.";
}
?>
