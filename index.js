const result = () =>
{
	let score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
		}
 alert("Bien hecho! Completaste el quiz y tu puntuacion fue de: "+score);
 
  
  

};