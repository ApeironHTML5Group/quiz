(function(){

	function showAnswer(){		

		var btnId = this.id;
		var btnNumber = btnId.replace( /^\D+/g, '');
	
		var pitanje = document.getElementById('q'+btnNumber);
		var odgovori = pitanje.getElementsByTagName('li');
		var idTacnogOdgovora = pitanje.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovori.length; i++) {	
			
			var odgovor = odgovori[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovori[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovori[i].style.color = "red";											
			}			
		}	
		
	}

	var prikaziOdgovoreBtn1 = document.getElementById('show-answers1');
	prikaziOdgovoreBtn1.addEventListener("click", showAnswer);


	var prikaziOdgovoreBtn2 = document.getElementById('show-answers2');
	prikaziOdgovoreBtn2.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn3 = document.getElementById('show-answers3');
	prikaziOdgovoreBtn3.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn4 = document.getElementById('show-answers4');
	prikaziOdgovoreBtn4.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn5 = document.getElementById('show-answers5');
	prikaziOdgovoreBtn5.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn6 = document.getElementById('show-answers6');
	prikaziOdgovoreBtn6.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn7 = document.getElementById('show-answers7');
	prikaziOdgovoreBtn7.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn8 = document.getElementById('show-answers8');
	prikaziOdgovoreBtn8.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn9 = document.getElementById('show-answers9');
	prikaziOdgovoreBtn9.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn10 = document.getElementById('show-answers10');
	prikaziOdgovoreBtn10.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn11 = document.getElementById('show-answers11');
	prikaziOdgovoreBtn11.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn12 = document.getElementById('show-answers12');
	prikaziOdgovoreBtn12.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn13 = document.getElementById('show-answers13');
	prikaziOdgovoreBtn13.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn14 = document.getElementById('show-answers14');
	prikaziOdgovoreBtn14.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn15 = document.getElementById('show-answers15');
	prikaziOdgovoreBtn15.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn16 = document.getElementById('show-answers16');
	prikaziOdgovoreBtn16.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn17 = document.getElementById('show-answers17');
	prikaziOdgovoreBtn17.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn18 = document.getElementById('show-answers18');
	prikaziOdgovoreBtn18.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn19 = document.getElementById('show-answers19');
	prikaziOdgovoreBtn19.addEventListener("click", showAnswer);

	var prikaziOdgovoreBtn20 = document.getElementById('show-answers20');
	prikaziOdgovoreBtn20.addEventListener("click", showAnswer);


}())