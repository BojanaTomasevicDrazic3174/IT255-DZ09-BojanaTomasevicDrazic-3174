<?php
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
