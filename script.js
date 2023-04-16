function blr() {
    document.getElementById("bg-image").style.filter="blur(8px)"
    document.getElementById("blr").style.display="none"
    document.getElementById("DltBlr").style.display="inline-block"
}
function DltBlr() {
    document.getElementById("bg-image").style.filter="blur(0)"
    document.getElementById("DltBlr").style.display="none"
    document.getElementById("blr").style.display="inline-block"
    
}