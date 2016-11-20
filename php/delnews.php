<?php
$id = $_REQUEST['id'];
$pic = $_REQUEST['img'];
$conn = mysqli_connect('liyu3741.gotoftp2.com','liyu3741','3741511liyu','liyu3741',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "DELETE FROM news WHERE id=$id";
$result = mysqli_query($conn, $sql);
if($result){
	unlink($pic);
    echo "success";
}else{
    echo "faild";
}
