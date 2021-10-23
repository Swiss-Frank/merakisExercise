let container =["Fish","Fish","Fish","Coal","Coal","Coal","Honey","Honey"]; 

function loadingCrane() {
    var M;
    
    for(M = 1; M < 2; M++) {
        container.sort();
        console.log(container.length);
        console.log("")
        console.log(container);
    }
    return M.valueOf(container);    

}

loadingCrane();

//There are 0 units of time between any of the two same container types
//Coal -> Coal -> Coal -> Fish -> Fish -> Fish -> Honey -> Honey
