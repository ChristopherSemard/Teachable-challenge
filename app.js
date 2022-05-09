// Swicth dark/light mode
buttonSwitchMode = document.querySelector('#darkmode')
buttonSwitchMode.addEventListener("click", ()=>{ 
    let actualTheme = document.documentElement.getAttribute("data-theme"); 
    actualTheme === "dark" ?  newTheme = "light" : newTheme = "dark";
    console.log(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
})

// Ecoute des boutons filtres
buttonsFilter = document.querySelectorAll('main nav button')
console.log(buttonsFilter);
for(button of buttonsFilter){
    button.addEventListener("click", (e) => {
        switchButton(e.target)

        // ID de la catégorie cliquée
        idFilter = e.target.id
        console.log(idFilter);
        
    })
}


// Enlever la classe active de tous les boutons et la rajouter à celui cliqué
function switchButton(buttonActive) {
        for(let buttonInactive of buttonsFilter){
            buttonInactive.classList.remove('active');
        }
        buttonActive.classList.add('active');
}