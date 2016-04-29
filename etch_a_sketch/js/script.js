var userInput = '';

$(document).ready(function(){
	$('<div/>').appendTo('body');
	$('div').addClass('container');
	$('#banner').removeClass('container');
	$('#buttons').removeClass('container');
	defaultTableMaker(50, sketch);
	getCellWidth(50);
});

function defaultTableMaker(numBoxes, paintFunc){
	//numRows = Math.floor(Math.sqrt(numBoxes));
	//console.log(numRows);
	$('<table/>').appendTo('.container');
	$('table').addClass('table');
	for(var rows = 0; rows < numBoxes; rows++){
		$('<tr/>').appendTo('table');
		$('tr').addClass('row');
	}

	for(var columns = 0; columns < numBoxes; columns++ ){
		$('<td/>').appendTo('tr');
		$('td').addClass('cell')
	}
	paintFunc();

}

function sketch() {
	$('td').hover(function(){
		$(this).addClass('painted');
	});
}

function randSketch() {	
	$('.cell').hover(function(){
		var r = Math.floor((Math.random() * 255));
		var g = Math.floor((Math.random() * 255));
		var b = Math.floor((Math.random() * 255));
		var color = "rgb(" + r + "," + g + "," + b + ")";
		$(this).css("background-color", color);
	});
}

function getCellWidth(numBoxes){
	//boxesPerSide = Math.floor(Math.sqrt(numBoxes));
	cellWidth = (960 / numBoxes) - 2;
	rowHeight = (960 / numBoxes) + 1;
	$('td').css("width", cellWidth);
	$('td').css("height", cellWidth);
	$('tr').css("height", rowHeight);
}

function resetToDefault(){
	userInput = prompt("How many rows would you like the next grid to have? 2-128", "50");
	//console.log(userInput);
	$('.table').remove();
	defaultTableMaker(parseInt(userInput), sketch);
	getCellWidth(parseInt(userInput));
}

function resetToRandom() {
	userInput = prompt("How many rows would you like the next grid to have? 2-128", "50");
	$('.table').remove();
	defaultTableMaker(parseInt(userInput), randSketch);
	getCellWidth(parseInt(userInput));
}

function resetGrid_2() {
	$('td').removeClass('painted');
	$('td').css("background-color", "#888")
}

function resetGrid_3() {
	$('.table').remove();
}

function hideGrid() {
	$('.cell').css('border', 'none');
	$('#hide').css('display', 'none');
	$('#show').css('display', 'initial');
}

function showGrid() {
	$('.cell').css('border', '1px solid black');
	$('#show').css('display', 'none');
	$('#hide').css('display', 'initial');
}