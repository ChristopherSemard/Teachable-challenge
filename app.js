// Swicth dark/light mode
buttonSwitchMode = document.querySelector('#darkmode')
buttonSwitchMode.addEventListener("click", ()=>{ 
    let actualTheme = document.documentElement.getAttribute("data-theme"); 

    actualTheme === "dark" ?  newTheme = "light" : newTheme = "dark";
    console.log(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
})