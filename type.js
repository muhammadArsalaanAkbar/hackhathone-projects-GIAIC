var hiddenButton = document.getElementById("hyp-butt");
var skills = document.getElementById("skills");
hiddenButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
