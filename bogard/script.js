function viewDiv(i){
    let a = document.querySelector("#gallery");

    if (i == 1) {
        for(let t = 0;t<a.children.length;t++){
            if(a.children[t].id == "succulent"){
                a.children[t].style.display = "block";
            }else{
                a.children[t].style.display = "none";
            }
        }
       
    }else if(i == 2){
        for(let t = 0;t<a.children.length;t++){
            if(a.children[t].id == "cactus"){
                a.children[t].style.display = "block";
            }else{
                a.children[t].style.display = "none";
            }
        }
    }else if(i == 3){
        for(let t = 0;t<a.children.length;t++){
            if(a.children[t].id == "aglaonemas"){
                a.children[t].style.display = "block";
            }else{
                a.children[t].style.display = "none";
            }
        }
    }

    
    
}