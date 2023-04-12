<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load the PHPMailer library

// Retrieve the form data from the request body
$data = json_decode(file_get_contents('php://input'), true);

// Create a new PHPMailer object
$mail = new PHPMailer(true);

try {
    // Configure the PHPMailer object
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'youremail@gmail.com'; // Your Gmail address
    $mail->Password = 'yourpassword'; // Your Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Set the recipient and sender email addresses
    $mail->setFrom($data['email'], $data['name']);
    $mail->addAddress('loveleen6assi@gmail.com'); // Your email address
    $mail->addReplyTo($data['email'], $data['name']);

    // Set the email subject and message body
    $mail->Subject = 'New message from your website';
    $mail->Body    = $data['message'];

    // Send the email
    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
}
