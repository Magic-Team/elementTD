var worldMap=5;

window.onload = function()
{

worldmapGen();


}

function worldmapGen(){
	console.log("mapGen call");
	
	
	
}

function myWorld() {
  console.log(getMap("level_1"));
}

function getMap(map){
	var xhr = new XMLHttpRequest()
		xhr.open("GET", './level/' + map + '.json', false);
		xhr.overrideMimeType("application/json");
		xhr.send(null);
		if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
			throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
		var mapJsonData = xhr.responseText;
		var mapData = JSON.parse(mapJsonData);
		return mapData;
}