<?php

$id = $_REQUEST['id'];
$pic = $_REQUEST['pic'];
$arrpic=explode(",",$pic);
$conn = mysqli_connect('liyu3741.gotoftp2.com','liyu3741','3741511liyu','liyu3741',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "DELETE FROM cases WHERE id=$id";
$result = mysqli_query($conn, $sql);
if($result){
	for ($i=0; $i < count($arrpic); $i++) { 
		unlink($arrpic[$i]);
};
    echo "success";
}else{
    echo "faild";
}
