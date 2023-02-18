$("#start").show();
$("#container").css("display", "none");
alert("Are you ready to see my surprise");
$("#container").css("display", "none");
$("#container").css("display", "block");
$("#container").slideDown(2000);
$("#start").hide();
$("h1").hide();

$("h1").slideDown(2000);

let image = [
    "url('./images/p1.jpg')",
    "url('./images/p2.jpg')",
    "url('./images/p3.jpg')",
    "url('./images/p4.jpg')",
    "url('./images/p5.jpg')",
    "url('./images/p6.jpg')",
    "url('./images/p7.jpg')",
    "url('./images/p8.jpg')",
];

let l = image.length;
i = 0;
function hello() {
    console.log("hello");
    document.getElementById("pic").style.backgroundImage = image[i];
    document.getElementById("pic").style.backgroundRepeat = "no-Repeat";
    document.getElementById("pic").style.backgroundSize = "cover";
    document.getElementById("pic").style.backgroundPosition = "center";
    i++;
    if (i > l) {
        i = 0;
    }
    setInterval(hello, 2000);
}
