<?php
    $Destination=$_POST['Destination'];
    $Bustype=$_POST['Bustype'];
    $number=$_POST['number'];
    $departuredate=$_POST['departuredate'];
    $Paymentmethod=$_POST['Paymentmethod'];

    //Database connection
    $conn= new mysqli('localhost','root','','project');
    /* if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt=$conn->prepare("insert into bookings(Destination,Bustype,number,departuredate,Paymentmethod) values(?,?,?,?,?)");
        $stmt->bind_param("ssiis",$Destination,$Bustype,$number,$departuredate,$Paymentmethod);
        $stmt->execute();
        echo "Registration Successfully...";
        $stmt->close();
        $conn->close();
    } */
?>