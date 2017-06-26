<?php

 header("Access-Control-Allow-Origin: *");

	$method = $_SERVER['REQUEST_METHOD'];


	$servername = "localhost";
	$username = "username";
	$password = "password";
	$dbname = "myDB";


	switch ($method) {
	  case 'PUT':
	    do_something_with_put();
	    break;
	  case 'POST':
	    $val=urldecode($_REQUEST['id']);
	    if ($val=='soba') {
	    	// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
  			if ($conn->connect_error) {
  			    die("Connection failed: " . $conn->connect_error);
  			}
    			$method2  = file_get_contents('php://input');
    			$data = json_decode($method2);
    			$kvadrata = $data->kvadrata;
    			$kreveta = $data->kreveta;
    			$sprat = $data->sprat;
    			$terasa = $data->terasa;
    			$kuhinja = $data->kuhinja;
    			$sql = "INSERT INTO `soba` (`kvadrata`, `kreveta`, `sprat`, `terasa`, `kuhinja`) VALUES
  										('".$kvadrata."' , '".$kreveta."', '".$sprat."', '".$terasa."', '".$kuhinja."')";

    			if ($conn->query($sql) === TRUE) {
    			    echo "New record created successfully";
    			} else {
    			    echo "Error: " . $sql . "<br>" . $conn->error;
    			}
    			$conn->close();
    			echo "ok";
	    } else {

  	    	// Create connection
  			$conn = new mysqli($servername, $username, $password, $dbname);
  			// Check connection
  			if ($conn->connect_error) {
  			    die("Connection failed: " . $conn->connect_error);
  			}

    			$method2  = file_get_contents('php://input');
    			$data = json_decode($method2);
    			$grad = $data->grad;
    			$zvezdica = $data->zvezdica;
    			$udaljenost = $data->udaljenost;
    			$parking = $data->parking;
    			$restoran = $data->restoran;
    			$kontakt = $data->kontakt;
    			$sql = "INSERT INTO `hotel` (`grad`, `zvezdica`, `udaljenost`, `parking`, `restoran`, `kontakt`) VALUES
    										('".$grad."' , '".$zvezdica."', '".$udaljenost."', '".$parking."', '".$restoran."','".$kontakt."')";

    			if ($conn->query($sql) === TRUE) {
    			    echo "New record created successfully";
    			} else {
    			    echo "Error: " . $sql . "<br>" . $conn->error;
    			}

  			$conn->close();
  			echo "ok";
	    }
	    break;
	  case 'GET':
	    header("Access-Control-Allow-Origin: *");
		$data = array(
			array('id' =>'1','kreveta' => '1','kvadrata' => '25','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Prvi'),
			array('id' =>'2','kreveta' => '2','kvadrata' => '30','kuhinja' => 'Da','terasa' => 'Ne','sprat' => 'Drugi'),
			array('id' =>'3','kreveta' => '2','kvadrata' => '30','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Prvi'),
			array('id' =>'4','kreveta' => '4','kvadrata' => '40','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Treci'),
			array('id' =>'5','kreveta' => '3','kvadrata' => '35','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Treci'),
			array('id' =>'6','kreveta' => '3','kvadrata' => '32','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Treci'),
			array('id' =>'7','kreveta' => '2','kvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Drugi'),
			array('id' =>'8','kreveta' => '1','kvadrata' => '25','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Drugi'),
			array('id' =>'9','kreveta' => '2','kvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Drugi'),
			array('id' =>'10','kreveta' => '5','kvadrata' => '50','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Treci'),
			array('id' =>'11','kreveta' => '4','kvadrata' => '45','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Prvi'),
			array('id' =>'12','kreveta' => '4','kvadrata' => '45','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Prvi'),
			array('id' =>'13','kreveta' => '2','kvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Prvi'),
			array('id' =>'14','kreveta' => '1','kvadrata' => '25','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Prvi'),
			array('id' =>'15','kreveta' => '2','kvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Da','sprat' => 'Drugi'),
			array('id' =>'16','kreveta' => '2','kvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Da','sprat' => 'Drugi'),

		);
		echo json_encode($data);
	    break;
	  case 'DELETE':
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
        if(urldecode($_REQUEST['deleteSoba'])){
          	echo ("Ok");
          }
        if(urldecode($_REQUEST['deleteHotel'])){
        	echo ("Ok");
        }
	    break;
}

?>

<!--
[{"kreveta":"1","kvadrata":"25","kuhinja":"Ne","terasa":"Ne","sprat":"Prvi"},
{"kreveta":"2","kvadrata":"30","kuhinja":"Da","terasa":"Ne","sprat":"Drugi"},
{"kreveta":"2","kvadrata":"30","kuhinja":"Da","terasa":"Da","sprat":"Prvi"},
{"kreveta":"4","kvadrata":"40","kuhinja":"Da","terasa":"Da","sprat":"Treci"},
{"kreveta":"3","kvadrata":"35","kuhinja":"Ne","terasa":"Ne","sprat":"Treci"},
{"kreveta":"3","kvadrata":"32","kuhinja":"Ne","terasa":"Ne","sprat":"Treci"},
{"kreveta":"2","kvadrata":"30","kuhinja":"Ne","terasa":"Ne","sprat":"Drugi"},
{"kreveta":"1","kvadrata":"25","kuhinja":"Ne","terasa":"Ne","sprat":"Drugi"},
{"kreveta":"2","kvadrata":"30","kuhinja":"Ne","terasa":"Ne","sprat":"Drugi"},
{"kreveta":"5","kvadrata":"50","kuhinja":"Da","terasa":"Da","sprat":"Treci"},
{"kreveta":"4","kvadrata":"45","kuhinja":"Da","terasa":"Da","sprat":"Prvi"},
{"kreveta":"4","kvadrata":"45","kuhinja":"Da","terasa":"Da","sprat":"Prvi"},
{"kreveta":"2","kvadrata":"30","kuhinja":"Ne","terasa":"Ne","sprat":"Prvi"},
{"kreveta":"1","kvadrata":"25","kuhinja":"Ne","terasa":"Ne","sprat":"Prvi"},
{"kreveta":"2","kvadrata":"30","kuhinja":"Ne","terasa":"Da","sprat":"Drugi"},
{"kreveta":"2","kvadrata":"30","kuhinja":"Ne","terasa":"Da","sprat":"Drugi"}]
-->
