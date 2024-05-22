let tempDatabase = '{ "items" : [' +
'{"Name":"Gwimbly", "internalName":"gwimbly-ooh-ooh-ooh", "Description":"Test", "Price":"£0.00"},' +
'{"Name":"Gwimbly", "internalName":"gwimbly-ooh-ooh-ooh", "Description":"Test", "Price":"£0.00"},' +
'{"Name":"Gwimbly", "internalName":"gwimbly-ooh-ooh-ooh", "Description":"Test", "Price":"£0.00"},' +
'{"Name":"Gwimbly", "internalName":"gwimbly-ooh-ooh-ooh", "Description":"Test", "Price":"£0.00"},' +
'{"Name":"Gwimbly", "internalName":"gwimbly-ooh-ooh-ooh", "Description":"Test", "Price":"£0.00"},' +
'{"Name":"Gwimbly", "internalName":"gwimbly-ooh-ooh-ooh", "Description":"Test", "Price":"£0.00"}' +
' ]}';

function generate(){
    for (let j = 0; j < 2; j++) {
      limit = (3 * j) + 3;
      min = (3 * j);
      modBar = document.createElement("section");
      modBar.className = "lower";
      content = document.getElementById("content");
      content.insertBefore(modBar,content.children[j+2]);
      
      for (i = 0 + min; i < limit; i++) { 
        const obj = JSON.parse(tempDatabase);
        console.log(obj);

        mod = document.createElement("button");
        mod.id = "item" + i; mod.class = "lower2 box";
        mod.setAttribute( "onClick", "modPage('" + obj.items[i].internalName + "')" );

        bars = document.getElementsByClassName("lower");
        bar = bars[j];
        bar.insertBefore(mod,bar.children[i]);

        mod.appendChild(modImage(obj.items[i].internalName));
        mod.innerHTML = '<img src="img/items/' + obj.items[i].internalName + '.webp" class="mod-image">' + obj.items[i].Name + '<br>' + obj.items[i].Price;
        console.log(mod.innerHTML);
      }
    }
}


// function modPage(item){
//   const paramStr = "p=" + item;
//   const searchParams = new URLSearchParams(paramStr);
//   window.location.href = "/mod.html?" + searchParams;
// }


const modImage = (img) => {
  let imgElement = document.createElement("img");
  imgElement.src = "img/items/" + img + ".webp";
  imgElement.className = "mod-image";
  return imgElement;
};