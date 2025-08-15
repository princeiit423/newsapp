const factNews = async (query)=>{
              console.log(`fetching news for ${query}`);
        apikey = 'f1c52836028d948a4fd081cf20379aef';
            url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=10&apikey=${apikey}`;
            
            await fetch(url)
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                articles = data.articles;
    
                let str="";
                for (i = 0; i < articles.length; i++) {
                    str= str + `<div class="card my-5" style="width: 18rem;">
                        <img src="${articles[i].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${articles[i].title.slice(0,50)}</h5>
                          <p class="card-text">${articles[i].description.slice(0,90)}</p>
                          <a href="${articles[i].url}" class="btn btn-primary">Read article</a>
                        </div>
                      </div>`
                }
                document.querySelector(".container").innerHTML= str

    
            }) ;
    
    }
    factNews("bollywood");

    search.addEventListener("click",(e)=>{
      e.preventDefault();
      let query= searchInput.value;
      document.querySelector(".state").innerText= searchInput.value;
      factNews(query);
    }) 

    
    let test= document.querySelector(".sports");
    test.addEventListener("click", ()=>{
        query="sports";
        factNews(query);
    })

    let test1= document.querySelector(".Entertainment");
    test1.addEventListener("click", ()=>{
        query="entertainment";
        factNews(query);
    })
    let test2= document.querySelector(".politics");
    test2.addEventListener("click", ()=>{
        query="politics";
        factNews(query);
    })

