document.querySelectorAll(".nav_button").forEach(function(button) {
    button.addEventListener("mouseover", nav_but_over);
    button.addEventListener("mouseout", nav_but_out);
});

function nav_but_over(e) {
    e.target.style.backgroundColor = "purple";}

function nav_but_out(e) {
    e.target.style.backgroundColor = "";}

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}