(function(){

	function checkAnswer(){
		var questionCount = document.getElementsByTagName('section');

		for (var j = 1; j<=questionCount.length; j++){

			var pitanje = document.getElementById('q'+j);
			var odgovori = pitanje.getElementsByTagName('li');
			var sviIdTacnogOdgovora = pitanje.getAttribute('data-correct-answer-id'); 
			var arrayIdTacnogOdgovora = sviIdTacnogOdgovora.split(" ");

			var prviIdTacnogOdgovora = arrayIdTacnogOdgovora[0];
			var drugiIdTacnogOdgovora = arrayIdTacnogOdgovora[1];
			var treciIdTacnogOdgovora = arrayIdTacnogOdgovora[2];
			var cetvrtiIdTacnogOdgovora = arrayIdTacnogOdgovora[3];
				

			for (var i = 0; i < odgovori.length; i++) {	
				
				var odgovor = odgovori[i];
				var isChecked = odgovor.getElementsByTagName('input')[0].checked;
				
				
				if (
					odgovor.id === prviIdTacnogOdgovora ||
					odgovor.id === drugiIdTacnogOdgovora ||
					odgovor.id === treciIdTacnogOdgovora ||
					odgovor.id === cetvrtiIdTacnogOdgovora 
					){
					odgovori[i].style.color = "green";		
				}
				if (
					odgovor.id !== prviIdTacnogOdgovora &&
					odgovor.id !== drugiIdTacnogOdgovora &&
					odgovor.id !== treciIdTacnogOdgovora &&
					odgovor.id !== cetvrtiIdTacnogOdgovora && 
					isChecked
					){				
					tacan = false;
					odgovori[i].style.color = "red";											
				}	

			}

		}

	}

	var btn = document.getElementById('show-answers');
	btn.addEventListener('click', checkAnswer);

}())