document.onclick = function() {
    var x = document.createElement("DIV");
    var t = document.createTextNode("This is a div element.");
    x.setAttribute("style", "background-color: pink;");
    x.appendChild(t);
    document.body.appendChild(x);
}


var a = 'Hello World!';
var posta = document.getElementById("email");

posta.onfocus = function()
{
    if(posta.value == "ja")
    {
        posta.value = "iluzanac@gmail.com";
    }
}

function b()
{
    console.log('Called b!');
}

b();
console.log(a);


function my() {
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "url('zuti_krug.jpg')";
}

function m() {
    document.body.style.backgroundColor = "gainsboro";
}