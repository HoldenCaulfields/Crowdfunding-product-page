// menu toggle

function myAction1() {
    let menu = document.getElementById("nav");
    if(menu.style.display === "block") {
        menu.style.display = "none";
    }
    else menu.style.display = "block";
}

// pledge-modal-completed toggle
function myAction2() {
    let completed = document.getElementById("modal-completed");
    completed.style.display ="block";
    completed.style.boxShadow = "0px 0px 0px 500px rgba(0, 0, 0, 0.5)";
}
function myAction3() {
    let completed = document.getElementById("modal-completed");
    completed.style.display = "none";
    let selection = document.getElementById("modal-selection");
    selection.style.display = "none";
}

// pledge-modal-selection
function myAction4() {
    let selection = document.getElementById("modal-selection");
    selection.style.display = "block";
    selection.style.boxShadow = "0px 0px 0px 1000px rgba(0, 0, 0, 0.5)";
}
function myAction5() {
    let selection = document.getElementById("modal-selection");
    selection.style.display = "none";
}

function myAction6() {
    let selection = document.querySelectorAll("#pledge-selected-start");
    selection[0].style.display = "block";
    selection[1].style.display = "block";
    selection[2].style.display = "block";
}

function myAction7() {
    let completed = document.getElementById("modal-completed");
    completed.style.display ="block";
    completed.style.boxShadow = "0px 0px 0px 500px rgba(0, 0, 0, 0.5)";
}

//Bookmark
function bookmark() {
    let x = document.getElementById("bookmark");
    let y = document.getElementById("bookmark-text");
    x.classList.toggle("bookmarked", y.innerHTML='Bookmarked');
    
}