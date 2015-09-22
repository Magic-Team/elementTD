window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
	
	canvas.addEventListener("mousedown", getPosition,false);
		
		
	var img = new Image();
		img.src = 'tileset.png';
		img.onload = function(){
			mapGen(this);
    }
	
	
	function getPosition(event){
		
		
	var x = event.x;
	var y = event.y;

	var canvas = document.getElementById('mon_canvas');

	x -= canvas.offsetLeft;
	y -= canvas.offsetTop
		
		console.log(x);
		
		
	}
		
	function mapGen(img){
		var xhr = new XMLHttpRequest()
		xhr.open("GET", './maps/' + "abadin" + '.json', false);
		xhr.overrideMimeType("application/json");
		xhr.send(null);
		if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
			throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
		var mapJsonData = xhr.responseText;
		var mapData = JSON.parse(mapJsonData);
		console.log(context,img,mapData);
			for (x = 0; x<20; x++)
			{
				for (y = 0; y<20; y++){
					context.drawImage(img, 32*mapData.terrain[y][x], 0, 32, 32, 32*x, 32*y, 32, 32);
				}
			}
}

}
