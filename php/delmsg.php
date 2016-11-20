<?php
$id = $_REQUEST['id'];
$conn = mysqli_connect('liyu3741.gotoftp2.com','liyu3741','3741511liyu','liyu3741',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "DELETE FROM message WHERE id=$id";
$result = mysqli_query($conn, $sql);
if($result){
    echo "success";
}else{
    echo "faild";
}