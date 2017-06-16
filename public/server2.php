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
			array('brojKreveta' => '1','brojKvadrata' => '25','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Prvi'),
			array('brojKreveta' => '2','brojKvadrata' => '30','kuhinja' => 'Da','terasa' => 'Ne','sprat' => 'Drugi'),
			array('brojKreveta' => '2','brojKvadrata' => '30','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Prvi'),
			array('brojKreveta' => '4','brojKvadrata' => '40','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Treci'),
			array('brojKreveta' => '3','brojKvadrata' => '35','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Treci'),
			array('brojKreveta' => '3','brojKvadrata' => '32','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Treci'),
			array('brojKreveta' => '2','brojKvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Drugi'),
			array('brojKreveta' => '1','brojKvadrata' => '25','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Drugi'),
			array('brojKreveta' => '2','brojKvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Drugi'),
			array('brojKreveta' => '5','brojKvadrata' => '50','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Treci'),
			array('brojKreveta' => '4','brojKvadrata' => '45','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Prvi'),
			array('brojKreveta' => '4','brojKvadrata' => '45','kuhinja' => 'Da','terasa' => 'Da','sprat' => 'Prvi'),
			array('brojKreveta' => '2','brojKvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Prvi'),
			array('brojKreveta' => '1','brojKvadrata' => '25','kuhinja' => 'Ne','terasa' => 'Ne','sprat' => 'Prvi'),
			array('brojKreveta' => '2','brojKvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Da','sprat' => 'Drugi'),
			array('brojKreveta' => '2','brojKvadrata' => '30','kuhinja' => 'Ne','terasa' => 'Da','sprat' => 'Drugi'),

		);
		echo json_encode($data);
	    break;
	  case 'DELETE':
	    do_something_with_delete();
	    break;
}

?>

<!--
[{"brojKreveta":"1","brojKvadrata":"25","kuhinja":"Ne","terasa":"Ne","sprat":"Prvi"},
{"brojKreveta":"2","brojKvadrata":"30","kuhinja":"Da","terasa":"Ne","sprat":"Drugi"},
{"brojKreveta":"2","brojKvadrata":"30","kuhinja":"Da","terasa":"Da","sprat":"Prvi"},
{"brojKreveta":"4","brojKvadrata":"40","kuhinja":"Da","terasa":"Da","sprat":"Treci"},
{"brojKreveta":"3","brojKvadrata":"35","kuhinja":"Ne","terasa":"Ne","sprat":"Treci"},
{"brojKreveta":"3","brojKvadrata":"32","kuhinja":"Ne","terasa":"Ne","sprat":"Treci"},
{"brojKreveta":"2","brojKvadrata":"30","kuhinja":"Ne","terasa":"Ne","sprat":"Drugi"},
{"brojKreveta":"1","brojKvadrata":"25","kuhinja":"Ne","terasa":"Ne","sprat":"Drugi"},
{"brojKreveta":"2","brojKvadrata":"30","kuhinja":"Ne","terasa":"Ne","sprat":"Drugi"},
{"brojKreveta":"5","brojKvadrata":"50","kuhinja":"Da","terasa":"Da","sprat":"Treci"},
{"brojKreveta":"4","brojKvadrata":"45","kuhinja":"Da","terasa":"Da","sprat":"Prvi"},
{"brojKreveta":"4","brojKvadrata":"45","kuhinja":"Da","terasa":"Da","sprat":"Prvi"},
{"brojKreveta":"2","brojKvadrata":"30","kuhinja":"Ne","terasa":"Ne","sprat":"Prvi"},
{"brojKreveta":"1","brojKvadrata":"25","kuhinja":"Ne","terasa":"Ne","sprat":"Prvi"},
{"brojKreveta":"2","brojKvadrata":"30","kuhinja":"Ne","terasa":"Da","sprat":"Drugi"},
{"brojKreveta":"2","brojKvadrata":"30","kuhinja":"Ne","terasa":"Da","sprat":"Drugi"}]
-->
