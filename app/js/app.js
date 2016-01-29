(function(){
	var prikaziOdgovoreBtn = document.getElementById('show-answers');
	var pitanje = document.getElementById('q1');
	var odgovori = pitanje.getElementsByTagName('li');

	
	
	
	prikaziOdgovoreBtn.addEventListener("click", function(){
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
	});
}())