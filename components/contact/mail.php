<?php
	header('Access-Control-Allow-Origin: *');

	header('Access-Control-Allow-Methods: GET, POST');

	header("Access-Control-Allow-Headers: X-Requested-With");
    
    $formData = file_get_contents( 'php://input' );
    $data = json_decode( $formData );
    if ( $data->submit && empty( $data->honeypot ) ) {
        $name = $data->name;
        $email = $data->email;
        $message = $data->message;

        if ( $name != '' && $email != '' && $message != '' ) {
            $mailTo = 'simmch@gmail.com';
            $subject = 'New contact form submission';
            $body  = 'From: ' . $name . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $success = mail( $mailTo, $subject, $body );

            if ( $success ) {
                $response[ 'success' ] = true;
            }
        }
    }

    echo json_encode( $response );
?>
