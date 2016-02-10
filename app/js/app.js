(function(){

	function checkAnswer(){
		var questionCount = document.getElementsByTagName('section');

		for (var j = 1; j<=questionCount.length; j++){

			var pitanje = document.getElementById('q'+j);
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

	}

	var btn = document.getElementById('show-answers');
	btn.addEventListener('click', checkAnswer);

}())