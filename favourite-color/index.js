document.getElementById("submit").onclick = function select(){
    var data = document.getElementById("select").value;
    switch(data){
        case "red":
            document.write("<h1 style='color: white; background-color: red;'>RED IS COOL</h1>");
            break;
        case "orange":
            document.write("<h1 style='color: white; background-color: orange;'>ORANGE IS COOL</h1>")
            break;
        case "yellow":
            document.write("<h1 style='color: white; background-color: yellow;'>YELLOW IS COOL</h1>")
            break;
        case "green":
            document.write("<h1 style='color: white; background-color: green;'>GREEN IS COOL</h1>")
            break;
        case "indigo":
            document.write("<h1 style='color: white; background-color: indigo;'>INDIGO IS COOL</h1>")
        case "violet":
            document.write("<h1 style='color: white; background-color: violet;'>VIOLET IS COOL</h1>")
        default:
            document.write("PLEASE CHOSE ONCE")
    } 
}