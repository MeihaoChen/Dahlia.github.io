$(document).ready(init);

function init() {
	drawCloud(d3.select('#word-cloud'));
	showReel(d3.select('#showReel'));
	checkBoxes(d3.select('#dashboard'));
	drawDash(d3.select('#dashboard'));
	drawHier(d3.select('#hier'));
	drawSunburst();
	drawTable('data/result_tweet.txt',d3.select('#table'));
	slide(d3.select('#slider'),d3.select('#table'),d3.select('#sliderText'));


	lineGraph(d3.select('#lineGraph'));
	stackedArea(d3.select('#horizonGraph svg'));

	var pieFiles = {'hashtag':'data/hashCount.csv',
	                //'geolocation':'data/locaCount.csv',
	                'coordinates':'data/stateCount.csv',
	                'source':'data/sourceCount.csv',
	                'user':'data/userCount.csv'}	
	selectPie(pieFiles, d3.select('#pie1'));
	$('.placeholders').hide(); 
	$('#plot1').show();

	
	$('#b1').click(function(){
		$('.placeholders').slideUp();
		$('#plot1').slideDown();
	});
	$('#b2').click(function(){
		$('.placeholders').slideUp();
		$('#plot2').slideDown();
	});
	$('#b3').click(function(){
		$('.placeholders').slideUp();
		$('#plot3').slideDown();
	});
	$('#b4').click(function(){
		$('.placeholders').slideUp();
		$('#plot4').slideDown();
	});
	$('#b5').click(function(){
		$('.placeholders').slideUp();
		$('#plot5').slideDown();
	});
	$('#b6').click(function(){
		$('.placeholders').slideUp();
		$('#plot6').slideDown();
	});
	$('#b7').click(function(){
		$('.placeholders').slideUp();
		$('#plot7').slideDown();
	});
	$('#b8').click(function(){
		$('.placeholders').slideUp();
		$('#plot8').slideDown();
	});
	$('#exp').click(function(){
		$('.placeholders').slideDown();
		var doc = new jsPDF();
		var specialElementHandlers = {
    	'#exp': function (element, renderer) {
        	return true;
        }
    };
        doc.fromHTML($('#main').html(), 15, 15, {
        	'width': 170,
            	'elementHandlers': specialElementHandlers
    	});
    	doc.save('sample-file.pdf');
	});
	$('.nav-sidebar a').click(function() {
		$('.nav-sidebar a').removeClass('active');
		$(this).addClass('active');
	});
	$(function () {

    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
});
}


