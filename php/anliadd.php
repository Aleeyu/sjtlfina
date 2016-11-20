<?php 
header("content-type:text/html;charset=utf-8");
require_once 'upload.func2.php';
require_once 'common.func.php';
$files=getFiles();
foreach($files as $fileInfo){
    $res=uploadFile($fileInfo);
    $uploadFiles[]=$res['dest'];
}
$uploadFiles=array_values(array_filter($uploadFiles));
$img = implode(",", $uploadFiles);   
$title = $_REQUEST['title'];
$lei=$_REQUEST['lei'];
$msg = $_REQUEST['msg'];
$timee=$_REQUEST['timee'];
$conn = mysqli_connect('liyu3741.gotoftp2.com','liyu3741','3741511liyu','liyu3741',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO cases VALUES(NULL,'$title','$timee','$lei','$img','$msg')";
$result = mysqli_query($conn, $sql);
if($result){
    echo '<h1>执行成功</h1>';
    echo '新记录在数据库中的编号为：'.mysqli_insert_id($conn);
}else{
    echo '<h1>执行失败</h1>';
    echo "可能原因-SQL语法错误：$sql";
}