
// document.addEventListener("DOMContentLoaded", function(){
	var uri="http://fstcat-csharp-exercises.azurewebsites.net/Exercises/";
	// var exercises = document.querySelectorAll('[id^="Line_"] > g');
// 	Array.prototype.forEach.call(exercises, function(ex, index) {

// 		var link = document.createElementNS("http://www.w3.org/2000/svg","a");
// 		console.log(link);
// 		link.setAttribute("href", uri + ex.id + ".html") ;
// 		link.setAttribute("target", "_blank");
// 		while (ex.firstChild) {
// 			link.appendChild(ex.firstChild)
// 		}
// 		ex.appendChild(link);
// 	});
// });

// //Fix foreach doesnt work in IE and EDGE 
// //http://tips.tutorialhorizon.com/2017/01/06/object-doesnt-support-property-or-method-foreach/
// (function () {
// 	if ( typeof NodeList.prototype.forEach === "function" ) return false;
// 	NodeList.prototype.forEach = Array.prototype.forEach;
// })();


$(function() {	

	var uri="http://fstcat-csharp-exercises.azurewebsites.net/Exercises/";
	// var exercises = document.querySelectorAll('[id^="Line_"] > g');
	var exercises = $("[id^=\"Line_\"] > g"); 

	$.each(exercises, function( index, ex ) {
		var link = document.createElementNS("http://www.w3.org/2000/svg","a");
		link.setAttribute("xlink:href", uri + ex.id + ".html") ;
		link.setAttribute("target", "_blank");
		$(this).wrapInner(link);
// console.log(ex.id);

});

});





