window.onload = function() {
	
	var uri="http://fstcat-csharp-exercises.azurewebsites.net/Exercises/";
	var exercises = document.querySelectorAll('.line > g');

	[].forEach.call(exercises, function(ex) {
		console.log(ex);
		var link = document.createElementNS("http://www.w3.org/2000/svg","a");
		link.setAttribute("href", uri + ex.id + ".html") ;
		link.setAttribute("target", "_blank");
		while (ex.firstChild) {
			link.appendChild(ex.firstChild)
		}
		ex.appendChild(link);

	});

};