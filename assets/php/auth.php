<?php

 require_once 'config.php';

 class Auth extends Database{

    //register new user
    public function register($name, $email, $password){
        $sql = "INSERT INTO customer (cname, cemail, cpassword) VALUES ( :name, :email, :pass)";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['name' => $name, 'email' => $email, 'pass' => $password]);
        return true;
    }


    public function user_exist($email){
        $sql = "SELECT cemail FROM customer WHERE cemail = :email";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['email'=>$email]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return $result;
    }

    //login
    public function login($email){
        $sql = "SELECT cemail, cpassword FROM customer WHERE cemail = :email AND deleted != 0";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['email'=>$email]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row;
    }


 }


?>