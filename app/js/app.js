(function(){

	
	document.addEventListener('click', function(e){

		if(e.target && e.target.nodeName == "BUTTON"){
			var btnId = e.target.id;
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
	});

}())