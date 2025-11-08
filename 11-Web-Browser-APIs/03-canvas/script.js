// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

// The Canvas API largely focuses on 2D graphics. It is used for game, data visualization, animation. Which also uses the <canvas> element, draws hardware-accelerated 2D and 3D graphics.

const canvas = document.getElementById('my-canvas');

// HTMLCanvasElement.getContext() method gets that element's context—the thing onto which the drawing will be rendered.
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';  
// fillStyle->if you want fill something in
// strokeSyle -> which is more like the color of the line or the border

ctx.fillRect(10,10, 150,100); // x-axis y-axis width height

// Draw circle
ctx.fillStyle = 'red'; // To change style
ctx.arc(300, 300, 100, 0, Math.PI * 2); // x-axis y-axis radius startAngle endAngle
ctx.fill(); // It will use the last fillstyle that was 

// Draw lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(10,10); // We will move to specific area because w're standing in 0,0 at top
ctx.lineWidth = 5;
ctx.lineTo(300,300);
ctx.stroke();

// Draw Text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World', 300, 100, 300); // "Text" x-axis y-axix max-wdithOfText
ctx.strokeText('Hello World', 300, 500, 300);

// Now we can also pull in images into our canvas as well
// Draw image
const image = document.querySelector('img');
image.style.display = 'none';
// Since we're usinh an external resource the images then we want to actually wait untill it loads
image.addEventListener('load',() => ctx.drawImage(image, 250,250, 100,100));
