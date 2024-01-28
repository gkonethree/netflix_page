const t1=document.getElementById("tab-1");
const t2=document.getElementById("tab-2");
const t3=document.getElementById("tab-3");

const t1c=document.getElementById("tab-1-content");
const t2c=document.getElementById("tab-2-content");
const t3c=document.getElementById("tab-3-content");


function openTab(t, tc) {
    try {
        t1.classList.remove("tab-border");
        t2.classList.remove("tab-border");
        t3.classList.remove("tab-border");
        document.getElementById(t).classList.add("tab-border");
        
        t1c.classList.remove("show");
        t2c.classList.remove("show");
        t3c.classList.remove("show");
        document.getElementById(tc).classList.add("show");
    } catch (error) {
        console.error("Error in openTab function:", error);
    }
}

