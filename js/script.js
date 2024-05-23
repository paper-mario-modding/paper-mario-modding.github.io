function generate(){
    //Database parsing code
    var request = new XMLHttpRequest();
    request.open("GET","../mods.json", false);
    request.send(null);
    var obj = JSON.parse(request.responseText);
    console.log(obj);

    // Generates two containers for mod showcase boxes
    for (let j = 0; j < 2; j++) {
      // Limits number of mods per container, currently to 3
      limit = (3 * j) + 3;
      min = (3 * j);

      // Creates a container bar for inserting mods in, inserts it into the HTML container
      modBar = document.createElement("div");
      modBar.className = "mod-bar";
      content = document.getElementById("content");
      content.insertBefore(modBar,content.children[j+2]);
      

      for (i = 0 + min; i < limit; i++) {
        if(obj.Mods[i] != null){
          // Creates a mod object from the database
        mod = document.createElement("a");
        mod.id = "item" + i; mod.className = "mod-box";
        mod.setAttribute( "href", obj.Mods[i].DownloadLink );

        // Finds the generated mod bars and selects which bar to add the mod to
        bars = document.getElementsByClassName("mod-bar");
        bar = bars[j];
        bar.insertBefore(mod,bar.children[i]);

        // Adds image of mod into the mod showcase box
        mod.appendChild(modImage(obj.Mods[i].internalName));

        // Insert mod into HTML
        // This part I don't like so much, will be more graceful in Svelte
        mod.innerHTML =  '<h2>' + obj.Mods[i].DisplayName + '</h2>' + '<br>' + obj.Mods[i].Version + '<br>' + obj.Mods[i].Creators[0] + '<br>' + obj.Mods[i].Game + ' - ' + obj.Mods[i].Platform + ' - Console Compatible:' + obj.Mods[i].ConsoleCompatible + '<br>' + obj.Mods[i].ReleaseDate + '<br>' + obj.Mods[i].SourceLink + '<br>' + obj.Mods[i].Description;
        }
      }
    }
  }

const modImage = (img) => {
  // Creates image part of mod box
  let imgElement = document.createElement("img");
  imgElement.src = "img/items/" + img + ".webp";
  imgElement.className = "mod-image";
  return imgElement;
};

window.onload = (function(){generate()});