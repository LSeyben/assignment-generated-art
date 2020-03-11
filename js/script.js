// Svg klaarzetten en vast maken aan body
let svg1 = document.createElementNS("http://www.w3.org/2000/svg","svg")
svg1.setAttribute("Class","svg");
svg1.setAttribute("viewBox","0 0 500 500");
svg1.setAttribute("width", "500");
svg1.setAttribute("height", "500");
let body = document.querySelector("body");
body.appendChild(svg1);

// Kleur pallet van coolors.co
let kleuren = ["#DB2B39","#29335C","#F3A712","#FOCEAO","#534D41"];

// Functie voor het maken van de cirkels, zoals besproken in de les
function createcircle(x,y,r,kleur){
    let cirkel = document.createElementNS("http://www.w3.org/2000/svg","circle");
    cirkel.setAttribute("cx",x);
    cirkel.setAttribute("cy",y);
    cirkel.setAttribute("r",r);
    cirkel.setAttribute("fill",kleur);
    return cirkel;
};

// Loop voor het doorlopen van de 1200 cirkels
for (let i=0; i<1200; i++){
    let CirkelX = Math.round(Math.random() * (500-1) + 1);
    let CirkelY = Math.round(Math.random() * (500-1) + 1);
    let CirkelR = Math.round(Math.random() * (15-3) + 3);
    let kleur = kleuren[Math.floor(Math.random() * kleuren.length)];
    
    svg1.appendChild(createcircle(CirkelX,CirkelY,CirkelR,kleur));


}