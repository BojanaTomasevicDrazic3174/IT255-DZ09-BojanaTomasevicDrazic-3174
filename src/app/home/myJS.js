var broj_kreveta;
var broj_nocenja;
var datum_prijave;
var mail;


function pronadjiSobu(){
	alert("Postovani, funkcija je u izradi, do tada unesite podatke i bicete kontaktirani u najkracem roku!")
	broj_kreveta = prompt("Sobu sa koliko kreveta zelite:","Sobe od 1 do 7 kreveta")
	if(isNaN(broj_kreveta)){
		alert("Unesite broj za broj kreveta u sobi!")
		return;
	}else if(broj_kreveta<1 || broj_kreveta>6){
		alert("U ponudi su sobe od 1 do 7 kreveta!")
		return;
	}

	broj_nocenja = prompt("Broj nocenja:")
	if(isNaN(broj_nocenja)){
		alert("Unesite broj za broj nocenja!")
		return;
	}else if(broj_nocenja<1 || broj_nocenja>60){
		alert("Izberite broj nocenja od 1 do 60 noci ili nas kontaktirajte putem maila ili pozivom.")
		return;
	}

	datum_prijave = prompt("Datim pocetka rezervacije:", "dd/mm/yyyy")
	if(!validDate(datum_prijave)){
		alert("pogresan format datuma!")
		return;
	}

	mail = prompt("Vas mail za kontakt:")
	if(!validateEmail(mail)){
		alert("Unesite ispravan mail!")
		return;
	}

	obavestenje();
}

function validDate(s){
	var bits = s.split('/');
  	var d = new Date(bits[2], bits[1] - 1, bits[0]);
  	return d && (d.getMonth() + 1) == bits[1];
}

function validateEmail(email) {
	// regex sa interneta za validaciju mail-a
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function obavestenje(){
	alert("Bicete putem maila obavesteni o sobi koja sadrzi: "+broj_kreveta+ " kreveta, broj nocenja: "+broj_nocenja+
		", sa datumom prijave: "+datum_prijave + " na mail: "+ mail +"");
}

function opisSadrzaja(div){
	alert("Funkcija je u izradi. Poglerdajte nas ostali sadrzaj do tada!")
	/*document.getElementsByClassName(div)[0].style.background = "url(img/bim.jpg) no-repeat center"; */
}
