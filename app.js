const search = document.getElementById("search-btn");
const searchWindow = document.getElementById("search-popup-window");

search.onclick = function () {
searchWindow.style.display = "flex";
};

window.onclick = function(event) {
    if(event.target == searchWindow) {
        searchWindow.style.display = "none";
    }
}