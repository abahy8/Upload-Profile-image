let profile = document.querySelector("#profile");
let inputFile = document.querySelector("#inputFile");

inputFile.onchange = function (){
    profile.src = URL.createObjectURL(inputFile.files[0])
}