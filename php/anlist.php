<?php 
    $leii=$_REQUEST["lei"];
    require_once('connect.php');
    $sql = "SELECT * FROM cases WHERE lei='$leii'";
    $query = mysql_query($sql);
    if($query&&mysql_num_rows($query)){
        while($row = mysql_fetch_assoc($query)){
            $data[] = $row;
        }
    }
    echo json_encode($data);
?>