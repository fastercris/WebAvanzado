var color=$(".selected").css("background-color");
var $canvas=$("canvas");
var context=$canvas[0].getContext("2d");
var lastEvent;
var mouseDown=false;
var Erasing = false;

//Cuando hagamos click en la lista de control de colores (3 bolitas)
$(".controls").on("click","li",function(){
	$(this).siblings().removeClass("selected");

	$(this).addClass("selected");

	color=$(this).css("background-color");
	Erasing= false;
});

$("#eraser").click(function() {
        Erasing = true;
	});

//Cuando nuevo color sea presionado
$('#revelarColor').click(function(){
	//Muestra el color seleccionado o el color oculto
	changeColor();
	$('#colorSelect').toggle();
});

//Actualizar el color
function changeColor(){
	var r=$('#red').val();  //val funciona como set
	var y=$('#yellow').val();
	var b=$('#blue').val();

	$('#newColor').css("background-color","rgb("+r+","+y+","+b+")");
}

$("input[type=range]").change(changeColor);

//Cuando agregar color sea presionado
$('#addColor').click(function(){
	//Agregar el color a los controles ya asignados (a lado de la bolitas)
	var $newColor=$("<li></li>");

	$newColor.css("background-color",$("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	//Seleccionamos el nuevo color
	$newColor.click();
});


//Cuando demos click en el area de canvas

$canvas.mousedown(function(e){
	lastEvent=e;
	mouseDown=true;
}).mousemove(function(e){
	//Para dibujar lineas
	if(mouseDown) //if(mouseDown==True)
	{
		context.lineWidth = 5;
		context.beginPath();
		if(Erasing == true){
            context.globalCompositeOperation="destination-out";
        }else{
            context.globalCompositeOperation="source-over";
        }
		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
		context.lineTo(e.offsetX,e.offsetY);
		context.strokeStyle=color;
		context.stroke();
		lastEvent=e;
	}
}).mouseup(function(){
	mouseDown=false;
}).mouseleave(function(){
	$canvas.mouseup();
})







/*

    $("#canvas").mousemove(function(e) {
        if (bMouseDown) {
			context.strokeStyle = strokeStyle;
            context.lineWidth = 5;
            context.beginPath();
            if(bErasing == true){
              context.globalCompositeOperation="destination-out";
            }else{
              context.globalCompositeOperation="source-over";
            }
            context.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            context.lineTo(e.pageX ,e.pageY);
            context.stroke();
            
            
            
        }  
    });*/