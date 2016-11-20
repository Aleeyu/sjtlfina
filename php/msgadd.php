<?php 
header('content-type:text/html;charset=utf-8');
$username = $_REQUEST['username'];
$phone = $_REQUEST['phone'];
$timee = $_REQUEST['timee'];
$message = $_REQUEST['message'];//地址，用户名，密码，表
$conn = mysqli_connect('liyu3741.gotoftp2.com','liyu3741','3741511liyu','liyu3741',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO message VALUES(NULL,'$username','$phone','$message','$timee')";
$result = mysqli_query($conn, $sql);
if($result){
    echo 'success';
}else{
    echo 'faild';
}