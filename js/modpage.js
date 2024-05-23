// This WIP code generates a unique page for any mod clicked on, can be added later if needs be

window.onload = (event) => {
    console.log("page is fully loaded");
    PageLoad();
};


function PageLoad(){
    url = new URL(window.location.href);
    mod = url.searchParams.get('p');
    console.log(mod)
    const obj = csvJSON("../db/mods.json");
    console.log(obj);

    if (mod == null){
        NotFound();
    }
}

function NotFound(){
    console.log("nada :(");
    modBar = document.createElement("section");
    modBar.className = "not-found";
    modBar.innerHTML = "<img src='img/icon.png' class='notfoundimg'><div>Crumbs! We couldn't find that mod.</div>";
    content = document.getElementById("content");
    content.insertBefore(modBar,content.children[1]);
}