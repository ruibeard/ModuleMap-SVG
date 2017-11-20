## Disclaimer

**All exercises present in this repository belong to Anglia Ruskin University or their respective teachers.**

I'm only using this material in order to learn new programming technologies like javascript, SVG, git bash even markdown used to write this readme file.  

# ModuleMap-SVG:

The main goal is to convert a pdf containing an image with a *"tube-like"* map into SVG that allowed us to click in each **exercise** (station)
### Old PDF / Image
![Old pdf/ image ](https://github.com/rtralmeida/ModuleMap-SVG/raw/master/resources/modulemap.png "old image / pdf")

### New clickable SVG MAP

[![Image Link](https://github.com/rtralmeida/ModuleMap-SVG/raw/master/resources/SVGmodulemap.png)](https://rtralmeida.github.io/ModuleMap-SVG/)


## How to use

[Go to this and click on the exercises circles and you will be redirected to the correct exercise (I hope so :) )](https://rtralmeida.github.io/ModuleMap-SVG/) 


##How to update it:
1. You need to update the SVG file code for that you have 2 options:
..* Edit the *.ai* file and go to *File > Export Selection*
..* Or import the file SVG_Illustrator-Exported.SVG into an SVG editor and make the change you need 
2. Grab the SVG code `<svg>...</svg>` and paste it into the *index.html* file
3. Profit :) (who needs more work anyway)



## How I did it:

1. Created the map on illustrator and gave the name to each layer the same of the exercises (you will understand why below)
2. Exported the SVG code from Illustrator 
3. Inserted the SVG code onto a new HTML file  
4. Created a JS file to create dynamically each exercise anchor `<a>` like so:
```
document.addEventListener("DOMContentLoaded", function(){
    var uri="http://fstcat-csharp-exercises.azurewebsites.net/Exercises/";
    var exercises = document.querySelectorAll('[id^="Line_"] > g');
    Array.prototype.forEach.call(exercises, function(ex, index) {
        var link = document.createElementNS("http://www.w3.org/2000/svg","a");
        console.log(link);
        link.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', uri + ex.id + ".html");
        link.setAttributeNS('', 'target', "_blank");
        while (ex.firstChild) {
            link.appendChild(ex.firstChild)
        }
        ex.appendChild(link);
    });
});

//Fix foreach doesnt work in IE and EDGE 
//http://tips.tutorialhorizon.com/2017/01/06/object-doesnt-support-property-or-method-foreach/
(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();
```

## Tools Used  

* Adobe Illustrator - To create the "image" in SVG format
* Sublime Text - to edit the code
* Git bash - to publish the code
* Github/ Github Pages - to host the repo and the page
* Coffe Machine ( you know why ) 

## Contribute 

Anyone is welcome to comment or make a pull request.
The main goal with this is to learn, not to prove *anyone anything*
Please feel free to suggest some code improvements or techniques. 


### about me:

**Rui Almeida**
**ruialmieda.me**
**iam@ruialmeida.me**