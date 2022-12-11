// set the onclick event to the button
document.getElementById("tags-button").addEventListener("click", myFunction);
document.getElementById('tags-input').focus(); 
document.getElementById('tags-input').select(); 
function myFunction(){
    let tags = document.getElementById('tags-input').value; 
    const spaced = tags.replace(/,/g, ', ');
    navigator.clipboard.writeText(spaced);
    document.getElementById("tags-input").value = ""; 
} 
