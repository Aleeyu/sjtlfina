<?php 
    require_once('connect.php');
    $sql = "select * from message";
    $query = mysql_query($sql);
    if($query&&mysql_num_rows($query)){
        while($row = mysql_fetch_assoc($query)){
            $data[] = $row;
        }
    }
    echo json_encode($data);
?>