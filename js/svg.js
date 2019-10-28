

let circles = document.querySelectorAll('.box');
let body = document.getElementById('body');
let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.style.position = "absolute";
svg.style.top = 0;
svg.style.left = 0;
svg.style.width = "100%";
svg.style.height = "100%";
svg.style.zIndex = -10;

let positions = [];

body.appendChild(svg);

CreateLines(svg, circles.length);

let lines = document.querySelectorAll('.lines');

PushPositionsInArr(positions, circles);


lines[0].setAttribute('x1', positions[0].x);lines[0].setAttribute('y1', positions[0].y);lines[0].setAttribute('x2', positions[1].x);lines[0].setAttribute('y2', positions[1].y);
lines[1].setAttribute('x1', positions[0].x);lines[1].setAttribute('y1', positions[0].y);lines[1].setAttribute('x2', positions[2].x);lines[1].setAttribute('y2', positions[2].y);
lines[2].setAttribute('x1', positions[2].x);lines[2].setAttribute('y1', positions[2].y);lines[2].setAttribute('x2', positions[3].x);lines[2].setAttribute('y2', positions[3].y);
lines[3].setAttribute('x1', positions[3].x);lines[3].setAttribute('y1', positions[3].y);lines[3].setAttribute('x2', positions[4].x);lines[3].setAttribute('y2', positions[4].y);
lines[4].setAttribute('x1', positions[3].x);lines[4].setAttribute('y1', positions[3].y);lines[4].setAttribute('x2', positions[5].x);lines[4].setAttribute('y2', positions[5].y);




function CreateLines(appendChildElement, ammountLines)
{
  for (var i = 0; i < ammountLines; i++)
  {
    var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.classList.add('lines');
    line.style.stroke = "lightgrey";
    line.style.strokeWidth = 5;
    line.setAttribute('x1', 0); line.setAttribute('y1', 0); line.setAttribute('x2', 0); line.setAttribute('y2', 0);
    appendChildElement.appendChild(line);
  }
}

function PushPositionsInArr(array, loopArray)
{
  for (var i = 0; i < loopArray.length; i++)
  {
    array.push(CalculateMidofEl(loopArray[i].children[0]));
  }
}

function CalculateMidofEl(element)
{
  let pos = {};
  pos.x = element.getBoundingClientRect().x + element.getBoundingClientRect().width / 2;
  pos.y = element.getBoundingClientRect().y + element.getBoundingClientRect().height / 2;
  return pos;
}
