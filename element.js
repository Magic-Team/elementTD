var worldMap;
var myCanvas; 
var myContext;

window.onload = function()
{
myCanvas = document.getElementById("mon_canvas");
myContext = myCanvas.getContext("2d");
var worldMap = new myWorld();
drawMap();
}

function myWorld() {
	console.log('My world');
	var mapData = getMap("level_1");
	var mapTile = new Image();
	mapTile.src = "tileset/"+mapData.tileset
	console.log(mapTile);
}

function drawMap() {
	for (x=0;x<20;x++)
	{
		for (y=0;y<20;y++){
			//myContext.drawImage(worldMap.mapData.terrain[x][y],10,10)
		}
	}
	
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