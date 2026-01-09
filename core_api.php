<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if (!file_exists('config.php')) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Erro de configuração no servidor."]);
    exit;
}
$config = require 'config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

$input = file_get_contents('php://input');
$data = json_decode($input);

if (!$data || empty($data->name) || empty($data->email) || empty($data->msg)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Preencha todos os campos obrigatórios."]);
    exit;
}

if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "E-mail inválido."]);
    exit;
}

$nomeLimpo = htmlspecialchars(strip_tags($data->name));
$emailLimpo = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$telLimpo  = htmlspecialchars(strip_tags($data->tel));
$msgLimpa  = nl2br(htmlspecialchars(strip_tags($data->msg)));

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['username'];
    $mail->Password   = $config['password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $config['port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['from_email']); 
    $mail->addReplyTo($emailLimpo, $nomeLimpo);

    $mail->isHTML(true);
    $mail->Subject = "Contato Site: " . $nomeLimpo;
    $mail->Body    = "
        <div style='font-family: Arial, sans-serif; color: #333;'>
            <h3>Novo contato recebido</h3>
            <p><strong>Nome:</strong> {$nomeLimpo}</p>
            <p><strong>Email:</strong> {$emailLimpo}</p>
            <p><strong>Telefone:</strong> {$telLimpo}</p>
            <hr>
            <p><strong>Mensagem:</strong><br>{$msgLimpa}</p>
        </div>
    ";
    $mail->AltBody = "Nome: {$nomeLimpo}\nEmail: {$emailLimpo}\nTel: {$telLimpo}\nMsg: {$data->msg}";

    $mail->send();
    
    echo json_encode(["status" => "success", "message" => "Email enviado!"]);

} catch (Exception $e) {
    error_log("Erro PHPMailer: " . $mail->ErrorInfo);

    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Erro interno ao enviar email."]);
}
?>