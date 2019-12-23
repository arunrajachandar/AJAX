const prompt = document.getElementById('prompt');
const css = document.getElementById('css');
const toggleButton = document.getElementById('toggleButton');

const title = document.getElementById('title');


const togglePage = (event)=>{
    event.preventDefault;
    if(title.innerHTML==='Find Related Words'){
        css.href ="byteCss.css";
        toggleButton.innerHTML="Switch to GET request";
        title.innerHTML="Shorten URL";
        prompt.innerHTML="Enter a valid URL";
    }else{
            css.href ="word.css";
            toggleButton.innerHTML="Switch to POST request";
            title.innerHTML="Find Related Words";
            prompt.innerHTML="Enter a word";
    
    }
    inputField.value = "";
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    responseField.innerHTML = "Welcome";
    
}

toggleButton.addEventListener("click", togglePage);