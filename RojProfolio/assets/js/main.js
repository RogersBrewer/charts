

function _(id) {
	return document.getElementById(id)
}


 var eng = "Dedicated, dependable and capable individual,  a quick learner who can absorb and come up with new ideas and who loves making those ideas a reality. Learn what I need to know to get the job done.  Well organized, detailed and an excellent team player who respect others. With a proven ability to work proactively in a fast pace environment.  What I'm looking for is a career start, opportunity within the company that will allow me to develop my skills and potential." ;
 
 var fre = "Un individu dévoué, fiable et capable, un apprenant rapide qui peut absorber et trouver de nouvelles idées et qui aime faire de ces idées une réalité. Apprenez ce que j'ai besoin de savoir pour faire le travail. Bien organisé, détaillé et un excellent joueur d'équipe qui respecte les autres. Avec une capacité éprouvée à travailler de manière proactive dans un environnement rapide. Ce que je recherche, c'est un début de carrière, une opportunité au sein de l'entreprise qui me permettra de développer mes compétences et mon potentiel."

 var fil = "Dedikado, mapagkakatiwalaan at may kakayahang indibidwal, isang mabilis na mag-aaral na maaaring sumipsip at makabuo ng mga bagong ideya at nagmamahal sa paggawa ng mga ideya na iyon ng isang katotohanan. Alamin kung ano ang kailangan kong malaman upang makuha ang trabaho. Well organisado, detalyado at isang mahusay na koponan ng player na paggalang sa iba. Sa pamamagitan ng isang napatunayan na kakayahan upang gumana nang maagap sa mabilis na kapaligiran. Ang hinahanap ko ay isang pagsisimula sa karera, pagkakataon sa loob ng kumpanya na magpapahintulot sa akin na bumuo ng aking mga kasanayan at potensyal.";

 var span = "Individuo dedicado, confiable y capaz, un aprendiz rápido que puede absorber y proponer nuevas ideas y que ama hacer realidad esas ideas. Aprenda lo que necesito saber para hacer el trabajo. Bien organizado, detallado y un excelente jugador de equipo que respeta a los demás. Con una capacidad demostrada para trabajar de forma proactiva en un entorno de ritmo rápido. Lo que estoy buscando es un inicio de carrera, una oportunidad dentro de la compañía que me permita desarrollar mis habilidades y potencial"

 var langBody = _("eng-description");

function getLang() {
	var langName = _("language");
    var userInputLang = langName.options[langName.selectedIndex].value;

    if(userInputLang == 'EN') {
    	langBody = _("eng-description").innerHTML = eng;
    } else if (userInputLang == 'FR') {
		langBody = _("eng-description").innerHTML = fre;
	} else if (userInputLang == 'FI') {
		langBody = _("eng-description").innerHTML = fil;
	} else if (userInputLang == 'SP') {
		langBody = _("eng-description").innerHTML = span;
	} 
		
}


 



