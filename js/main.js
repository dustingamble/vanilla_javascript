// Wait until page has loaded to run our program
window.onload = function(){

// Store reference to body element
var body = document.getElementsByTagName('body')[0];

// Particle Array
var bubble = [];

// Max bubble
var numBubble = 10;

// Y Axis Range Coordinates
var minY = 0;
var maxY = window.innerHeight;

// X Axis Range Coordinates
var minX = 0;
var maxX = window.innerWidth;

// Z Axis Range Coordinates
var minZ = 500;
var maxZ = 900;

var facts = ['A raisin kept in a glass of champagne will rise to the top and sink to the bottom over and over.',
'By the law of averages, you are more likely to be killed by a flying Champagne cork than by a poisonous spider.',
'High-society English dandies in the 19th century insisted that the only way to properly polish boots was with Champagne.',
'The grapes that are traditionally used to make champagne are Chardonnay, Pinot Noir, and Pinot Meunier.',
'By law, blanc de blancs can only be made from a single grape variety Chardonnay.',
'The cork of the champagne bottle can pop at a velocity of 40 miles per hour and it can even reach to a speed of 100 miles per hour.',
'Champagne should be stored between 40 and 60 degrees Fahrenheit and may be kept upright or horizontally.',
'Unlike wine, champagne undergoes double fermentation, once in the barrel and then in the bottle.',
'A bottle of champagne can have as many as 49 million bubbles.',
'A champagne bottle bears a pressure that is equivalent to the tire pressure of a double-decker bus.'];
 
// Random number generator
function randomNumber (min, max) {
  return Math.floor(Math.random() * max) + min;
}

// Bubble Class
function Bubble () {
  
 // Create bubble element

  this.element = document.createElement('div');
  this.element.className = 'bubble';

  // A random number less or equal to the number of facts
  var num = randomNumber(0, facts.length);

  // Create a popup
  var popup = document.createElement("div");
  var text = document.createElement('p');
  text.style.opacity = 0;
  
  // Create a hover event handler
  var over = function () {
    popup.className='popup';
    text.style.opacity = 1;
  };

  var out = function () {
    popup.className = ' ';
    text.style.opacity = 0;
  };

  // Bind Event Handler
  this.element.addEventListener('mouseover', over, false);
  this.element.addEventListener('mouseout', out, false);

  // add text to popup
  text.innerText=facts[num];
  popup.appendChild(text);
  this.element.appendChild(popup);

  // Get formatted position 
  this.position = function () { 
    return 'translate3d(' + this.x + 'px,' + this.y + 'px,' + this.z + 'px)';
  };
  
  // Prefix an attribute
  this.prefix = function (key, value) {
    var prefixes = 'Webkit Moz O ms Khtml'.split(' ');
    for (var i = 0; i <= prefixes.length; i++) {
      var prefix = prefixes[i] || '';
      this.element.style[prefix + key] = value;
    }
  };
  
  // Set bubble attributes
  this.setAttributes = function () {
    
    this.prefix('TransitionDuration', randomNumber(70, 15) + 's');
    
    this.x = randomNumber(minX, maxX);
    this.y = randomNumber(minY, maxY);
    this.z = randomNumber(minZ, maxZ);
    
    this.speed = randomNumber(600, 600);
    this.element.style.transform = this.position();
    
  };

  // Animate bubble
  this.animate = function () {
    var self = this;
    self.setAttributes();
    setTimeout(function () { self.animate(); }, self.speed);
  };
  
  // Insert bubble into DOM and update reference
  this.element = body.appendChild(this.element);
  
  // Begin animation
  this.animate();
}

  // Bubble creator / iterator
  for (var i = 0; i < numBubble; i++) {
    bubble.push(new Bubble());
  }

};

  


