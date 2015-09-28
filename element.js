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
	var mapTile;
	var mapData;
	this.mapData = getMap("level_1");
	this.mapTile = new Image();
	this.mapTile.src = "tileset/"+this.mapData.tileset
}

function drawMap() {
	console.log(worldMap);
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