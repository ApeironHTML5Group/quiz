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

	var prikaziOdgovoreBtn2 = document.getElementById('show-answers2');
	
	prikaziOdgovoreBtn2.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q2');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn3 = document.getElementById('show-answers3');

	prikaziOdgovoreBtn3.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q3');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn4 = document.getElementById('show-answers4');

	prikaziOdgovoreBtn4.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q4');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn5 = document.getElementById('show-answers5');

	prikaziOdgovoreBtn5.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q5');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn6 = document.getElementById('show-answers6');

	prikaziOdgovoreBtn6.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q6');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn7 = document.getElementById('show-answers7');

	prikaziOdgovoreBtn7.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q7');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn8 = document.getElementById('show-answers8');

	prikaziOdgovoreBtn8.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q8');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn9 = document.getElementById('show-answers9');

	prikaziOdgovoreBtn9.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q9');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn10 = document.getElementById('show-answers10');

	prikaziOdgovoreBtn10.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q10');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn11 = document.getElementById('show-answers11');

	prikaziOdgovoreBtn11.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q11');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn12 = document.getElementById('show-answers12');

	prikaziOdgovoreBtn12.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q12');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn13 = document.getElementById('show-answers13');

	prikaziOdgovoreBtn13.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q13');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn14 = document.getElementById('show-answers14');

	prikaziOdgovoreBtn14.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q14');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn15 = document.getElementById('show-answers15');

	prikaziOdgovoreBtn15.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q15');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn16 = document.getElementById('show-answers16');

	prikaziOdgovoreBtn16.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q16');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn17 = document.getElementById('show-answers17');

	prikaziOdgovoreBtn17.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q17');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn18 = document.getElementById('show-answers18');

	prikaziOdgovoreBtn18.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q18');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn19 = document.getElementById('show-answers19');

	prikaziOdgovoreBtn19.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q19');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});

	var prikaziOdgovoreBtn20 = document.getElementById('show-answers20');

	prikaziOdgovoreBtn20.addEventListener("click", function(){

		var pitanjeV2 = document.getElementById('q20');
		var odgovoriV2 = pitanjeV2.getElementsByTagName('li');
		var idTacnogOdgovora = pitanjeV2.getAttribute('data-correct-answer-id'); 
		
		for (var i = 0; i < odgovoriV2.length; i++) {	
			
			var odgovor = odgovoriV2[i];
			var isChecked = odgovor.getElementsByTagName('input')[0].checked;
			
			
			if (odgovor.id === idTacnogOdgovora) {
				odgovoriV2[i].style.color = "green";
			} 
			if (odgovor.id !== idTacnogOdgovora && isChecked){				
				tacan = false;
				odgovoriV2[i].style.color = "red";											
			}			
		}		
	});
}())