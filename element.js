var worldMap;
var myCanvas; 
var myContext;

window.onload = function()
{
myCanvas = document.getElementById("mon_canvas");
myContext = myCanvas.getContext("2d");
worldMap = new myWorld();
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
	worldMap.mapTile.onload = function(){
		for (x=0;x<20;x++)
		{
			for (y=0;y<20;y++){
				myContext.drawImage(worldMap.mapTile,32*worldMap.mapData.terrain[y][x],32*worldMap.mapData.terrain[y][x],32,32,32*x,32*y,32,32);//img,sx,sy,swidth,sheight,x,y,width,height
			}
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