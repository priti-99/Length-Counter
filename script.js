document.getElementById("textarea").addEventListener("input",function(e){
    var value = e.target.value;

    var length = value.length;
    document.getElementById("char").innerHTML=length;
    value = value.trim();
    var word = value.split(" ");
    var name = word.filter(function(e){
        return e != "";
    })
    document.getElementById("word").innerHTML=name.length;
});