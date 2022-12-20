<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'front');

    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if($link === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }

    if(isset($_POST['email'])){
        $uemail = $_POST['email'];
        $upassword = $_POST['password'];
        $sql = "select * from users where email = '$uemail' AND password = '$upassword' limit 1";

        $result = mysqli_query($link, $sql);

        if(mysqli_num_rows($result) == 1){
            echo "Logged IN!";
            exit();
        }
        else{
            echo "Wrong data!";
        }
    }
?>
