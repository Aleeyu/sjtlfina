<?php 
    require_once('connect.php');
    $id = $_REQUEST['id'];
    $sql = "SELECT * FROM news WHERE id='$id'";
    $query = mysql_query($sql);
    if($query&&mysql_num_rows($query)){
        while($row = mysql_fetch_assoc($query)){
            $data[] = $row;
        }
    }
    /////////////////////
    $sql="select * from news where id = (select id from news where id > $id order by id asc limit 1)";
    $query = mysql_query($sql);
    if($query&&mysql_num_rows($query)){
        while($row = mysql_fetch_assoc($query)){
            $data[] = $row;
        }
    }
    ////////////////////
   $sql="select * from news where id = (select id from news where id < $id order by id desc limit 1)";
    $query = mysql_query($sql);
    if($query&&mysql_num_rows($query)){
        while($row = mysql_fetch_assoc($query)){
            $data[] = $row;
        }
    }
    echo json_encode($data);
?>