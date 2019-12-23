//console.log('Main');

const inputField = document.getElementById('inputField');
const wordButton = document.getElementById('wordButton');

const responseField = document.getElementById('responseField');

//console.log('Hellooooo');

const url = 'https://api.datamuse.com/words?rel_jjb=';
const suggestions = ()=>{
    const endpoint = `${url}${inputField.value}`;
    console.log(endpoint);
    const xhr = new XMLHttpRequest();
     
    xhr.responseType = 'json';
    xhr.onreadystatechange =()=>{
        responseField.innerHTML="Waiting For Suggestion";
        
        if(xhr.readyState===XMLHttpRequest.DONE){
            

            renderResponse(xhr.response);
        }
        


    }
    xhr.open('GET',endpoint);
    xhr.send();
}


const displaySuggestion = (event)=>{
  //  console.log('Pressed');
    event.preventDefault;
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    suggestions();
}

wordButton.addEventListener('click',displaySuggestion);


const shortenButton = document.getElementById('shortenButton');


const apiKey = '53e4313045f44d128621188d5834f603';
const rebrandlyUrl = 'https://api.rebrandly.com/v1/links';

const shortenURL = ()=>{
    const xhr = new XMLHttpRequest();
    const data = JSON.stringify({destination: inputField.value});
    xhr.responseType = 'json';
    xhr.onreadystatechange =()=>{
        responseField.innerHTML="Waiting For Suggestion";
        if(xhr.readyState===XMLHttpRequest.DONE){

            renderURLResponse(xhr.response);
        }
    }
    xhr.open('POST',rebrandlyUrl);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.setRequestHeader('apikey', apiKey);
    
    xhr.send(data);
}


const displayURL = (event)=>{
//    console.log('Pressed');
    event.preventDefault;
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    shortenURL();
}

shortenButton.addEventListener('click',displayURL);
