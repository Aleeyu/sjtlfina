<?php 
header('content-type:text/html;charset=utf-8');
require_once 'upload.class.php';
$upload=new upload('img','../images/img-newsmore');
$img=$upload->uploadFile();
$title = $_REQUEST['title'];
$msg = $_REQUEST['msg'];
$date=time();
$timee=date("y-m-d",$date);
$conn = mysqli_connect('liyu3741.gotoftp2.com','liyu3741','3741511liyu','liyu3741',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO news VALUES(NULL,'$title','$timee','$msg','$img')";
$result = mysqli_query($conn, $sql);
if($result){
    echo '<h1>执行成功</h1>';
    echo '新记录在数据库中的编号为：'.mysqli_insert_id($conn);
}else{
    echo '<h1>执行失败</h1>';
    echo "可能原因-SQL语法错误：$sql";
}