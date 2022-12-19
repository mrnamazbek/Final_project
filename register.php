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
    $uFullName = $_POST['fullName'];
    $uUserName = $_POST['userName'];

    $sql = "insert into users(id, email, password, full_name, username) values (NULL, '$uemail', '$upassword', '$uFullName', '$uUserName')";

    $result = mysqli_query($link, $sql);

    if($result){
        echo "Success!";
        exit();
    }
    else{
        echo "Wrong!";
    }
}