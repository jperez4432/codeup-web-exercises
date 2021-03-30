(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
   // console.log(planetsString.split('|'));
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var breakplanetsArray =  planetsArray.join("<br>");
    console.log(breakplanetsArray);
   // var newPlanets = planetsString.replace(/|/, "<br>");
   // console.log(newPlanets);
//   console.log(planetsArray.replace("|", "<br>"));


     /*
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetList = "<ul>";

    planetsArray.forEach(function (planet){
        planetList += "<li>" + planet + "</li>";
    })
    planetList += "</ul";
    console.log(planetList);
    //alternate solution
  //  var planetsAsUL = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
})();
