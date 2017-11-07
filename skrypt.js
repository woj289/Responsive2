
function zegar() {
    var d = new Date();
    var g = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	
	if (g < 10) { g = "0" + g; }
	if (m < 10) { m = "0" + m; }
	if (s < 10) { s = "0" + s; }
	
    document.getElementById("zegar").innerHTML = g + ":" + m + ":" + s;
	
	setTimeout("zegar()",1000);

	
}

function zm(liczba)
{
	if( liczba == 1)
	{
		document.getElementById("tile5").innerHTML = "Witaj w moim portfolio! </br></br> Zajmuję sie pisaniem stroch internetowcyh oraz aplikacji webowych. Technologię które wykorzystuję to HTML CSS oraz JavaScript. Ponadto frameworków takich jak Twitter Bootstrap i różnych bibliotek JavaScript takich jak Ajax lub jQuery. Codziennie ucze się czegoś nowego, programowanie to moja pasja";
	}
	if( liczba == 2)
	{
		document.getElementById("tile5").innerHTML = "Oferta, zapraszamy do kontaktu! </br></br><ul> <li>Strony Internetowe</li><li>Aplikacje Webowe</li><li>Wordpress</li><li>Optymalizacja</li><li>Indywidualne Rozwiązania</li></ul>";
	}
	if( liczba == 3)
	{
		document.getElementById("tile5").innerHTML = "Cirriculum Vitea <ul> <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Twitter Bootstrap</li><li>jQuery</li><li>Ajax</li></ul>";
	}
	if( liczba == 4)
	{
		document.getElementById("tile5").innerHTML = "Kontakt </br></br> Zapraszam do kontaktu w każdej sprawie, lubimy wyzwania, dostosujemy indywiduale rozwiązania dla Twojej firmy i użyjemy najnowocześniejszych rozwiązań aby usprawnić prace Twojej firmy <ul> <li>woj289@gmail.com</li> </ul>";
	}
}