const button=document.getElementById("button");


var numberInShape=1;


var oldValue=0;


button.oneclick=()=>{
    const circle = document.getElementById("circle");

    const square = document.getElementById("square");

    const rectangle = document.getElementById("rectangle");

    const n = document.getElementById("number");

    const $box = document.getElementById("box");

    let j ;
    n=Number(oldValue)+Number(n);
    for(let j=numberInShape;j<=n; j++){
        var shape=document.createElement("div");
        shape.innerHtml+=numberInShape;

    
    shape.innerHtml+=numberInShape;
        if(square.checked){
            shape.classList.add("square");  
        }else if(circle.checked){
        circle.classList.add("circle");
        }else if(rectangle.checked){
            rectangle.classList.add("rectangle");
    }else{
        document.write("invalid-input")
    }
    $box.append(shape);
    numberInShape++;
    oldValue=document.getElementById("box").lastElementChild.innerHTML
    ;
}
}

