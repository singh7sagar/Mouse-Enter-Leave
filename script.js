const h1 = React.createElement("h1", {}, "Hello Coder Army");
const div = document.createElement("div");

const h2 = React.createElement("h2", {}, "Hello");
const div2 = document.createElement("div");



document.body.style.color = "";

document.body.appendChild(div);
document.body.appendChild(div2);


div.style.paddingRight = "20px";



div2.style.padding = "20px";
div2.style.border = "2px dashed yellow"

// Line

// const line = document.createElement("hr");
// document.body.appendChild(line);

// line.style.width = "40px";


const root = ReactDOM.createRoot(div);
root.render(h1);

const root2 = ReactDOM.createRoot(div2);
root2.render(h2);



// Mouse Enter


div2.addEventListener("mouseenter", ()=>{
    document.body.style.backgroundColor = "BLUE";
    document.body.style.color = "Black";
    div2.style.border = "2px dashed Black"

    });

div2.addEventListener("mouseleave", ()=>{
    document.body.style.backgroundColor = "Black";
    document.body.style.color = "Aqua";
    div2.style.border = "2px dashed Yellow"
    });

// div2.addEventListener("")
