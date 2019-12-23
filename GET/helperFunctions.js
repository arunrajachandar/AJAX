//console.log('HF');
const renderResponse= (res)=>{
    if(!res.length){
        responseField.innerHTML = "<p>Try again! No suggestions found</p>";
        return
    }
    if(!res){
        console.log(res.status);
    }
    let words = [];

    for(i=0;i<Math.min(res.length, 10);i++){
        words.push(`<li>${res[i].word}</li>`)
        console.log(res[i].word)
    }
    words = words.join("");

    responseField.innerHTML = `Suggestions are <ol>${words}</ol>`;
    return

}

const renderURLResponse= (res)=>{
    if(res.errors){
        responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
      } else {  
        responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
      }
     return

}