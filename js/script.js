function generate(){
    //Database parsing code
    var request = new XMLHttpRequest();
    request.open("GET","../mods.json", false);
    request.send(null);
    var obj = JSON.parse(request.responseText);
    // console.log(obj);

    // Limits number of mods per container
    containerSize = 4;
    // Generates containers for mod showcase boxes
    containerCount = Math.ceil(obj.Mods.length / containerSize);

    for (let j = 0; j < containerCount; j++) {
      limit = (containerSize * j) + containerSize;
      min = (containerSize * j);

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

        // Adds image of mod into the mod showcase box
        // mod.appendChild(modImage(obj.Mods[i].internalName));
        // Make mod-box redirect to download
        mod.setAttribute( "href", obj.Mods[i].DownloadLink );

        // Insert mod-box into HTML
        bar.insertBefore(mod,bar.children[i]);

        
        // Create two sides of mod-box for flex-grow column purposes
        modLeft = document.createElement("div");
        modLeft.className = "mod-box-left";
        modRight = document.createElement("div");
        modRight.className = "mod-box-right";

        mod.insertBefore(modRight,mod.children[0]);
        mod.insertBefore(modLeft,mod.children[0]);

        // mod.innerHTML = 'test';

        // Create mod-box quadrants
        modTitle = document.createElement("div");
        modTitle.className = "mod-box-title";
        modDesc = document.createElement("div");
        modDesc.className = "mod-box-desc";

        modIcon = document.createElement("img");
        modIcon.className = "mod-box-icon";
        modIcon.setAttribute ( "src", "img/items/" + obj.Mods[i].InternalName + ".webp");
        modInfo = document.createElement("div");
        modInfo.className = "mod-box-info";

        //Insert mod-box quadrants
        modRight.insertBefore(modDesc,modRight.children[0]);
        modRight.insertBefore(modTitle,modRight.children[0]);
        modLeft.insertBefore(modInfo,modLeft.children[0]);
        modLeft.insertBefore(modIcon,modLeft.children[0]);

        //Set mod-box HTML, nasty hack, Svelte will fix

        // simple info
        modInfo.innerHTML = obj.Mods[i].Creators[0] + '<br>' + "Version " + obj.Mods[i].Version + '<br>' + obj.Mods[i].Game + '<br>' + obj.Mods[i].ReleaseDate + '<br>';
        // advanced info
        // modInfo.innerHTML = obj.Mods[i].Version + '<br>' + obj.Mods[i].Creators[0] + '<br>' + obj.Mods[i].Game + ' - ' + obj.Mods[i].Platform + ' - Console Compatible: ' + obj.Mods[i].ConsoleCompatible + '<br>' + obj.Mods[i].ReleaseDate + '<br>' + obj.Mods[i].SourceLink + '<br>';
        modTitle.innerHTML = "<h2>" + obj.Mods[i].DisplayName + '</h2>';
        modDesc.innerHTML = obj.Mods[i].Description;
        
        // This part I don't like so much, will be more graceful in Svelte
        // mod.innerHTML =  '<h2>' + obj.Mods[i].DisplayName + '</h2>' + '<br>' + obj.Mods[i].Version + '<br>' + obj.Mods[i].Creators[0] + '<br>' + obj.Mods[i].Game + ' - ' + obj.Mods[i].Platform + ' - Console Compatible: ' + obj.Mods[i].ConsoleCompatible + '<br>' + obj.Mods[i].ReleaseDate + '<br>' + obj.Mods[i].SourceLink + '<br>' + obj.Mods[i].Description;
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