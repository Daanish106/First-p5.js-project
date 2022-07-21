function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(450, 200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    ellipse(55, 50, 55, 55, 20);
    ellipse(575, 50, 55, 55, 20);
    ellipse(55, 430, 55, 55, 20);
    ellipse(575, 430, 55, 55, 20);
    rect(30, 89, 55, 300, 20);
    rect(550, 89, 55, 300, 20);

}

function take_snapshot()
{
    save("Image.png"); 
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}