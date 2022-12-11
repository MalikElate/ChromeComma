document.getElementsByClassName("copy")[0].addEventListener("click", myFunction);

async function myFunction(){
    const clipboardContents = await navigator.clipboard.readText();
    const spaced = clipboardContents.replace(/,/g, ', ');
    navigator.clipboard.writeText(spaced);
} 
