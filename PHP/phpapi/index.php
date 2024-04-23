<?php
$method=$_SERVER['REQUEST_METHOD'];
// $pathInfo=$_SERVER["PATH_INFO"];
// echo $pathInfo;
switch($method){
    case "GET":getUsers();break;
    case "POST":postDataToDb();break;
    case "PUT":updateData();break;
}
function getUsers(){
    include "./constants.php";
    $sql="SELECT * FROM users";
    $data=[];
    $result=$con->query($sql);
    if($result->num_rows >0){
        $con->query($sql);
        while($row = $result->fetch_assoc()){
        $temp=["id"=>$row["id"],"fullName"=>$row["fullName"],"age"=>$row["age"],"city"=>$row["city"]];
        array_push($data,$temp);
      }
    }
    echo json_encode($data);
    http_response_code(200);
    $con->close();
}
function postDataToDb(){
    include "./constants.php";
    $name=$_POST["fullName"];
    $age=$_POST["age"];
    $city=$_POST["city"];
    $sql="INSERT INTO users (fullName,age,city  ) values ('$name','$age','$city')";
    $result=$con->query($sql);
    echo $result;
    http_response_code(200);
    $con->close();
}
function updateData(){
    include("./constants.php");
    $request_body = file_get_contents('php://input');
    var_dump(json_decode($request_body,true)) ;
     $con->close();
}
?>