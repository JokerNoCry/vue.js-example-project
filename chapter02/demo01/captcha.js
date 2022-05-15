window.onload = function() {
    var wz = document.getElementById("wz");
    var num;
    wz.onclick = function() {
        var img="";
        num = Math.floor(Math.random() * 10)%4 + 1;
        pic = "<img src='images/" + num + ".png'/>";
        img = pic;
        var oCode = document.getElementById('code');
        oCode.innerHTML = img;
    }
}
