document.getElementById('#load').addEventListener('click', loadNews);

function loadNews(e) {

    const https = new XMLHttpRequest();
    const text = document.querySelector('.new').value;
                    
    
    https.open("GET", `https://newsapi.org/v2/everything?q=${text}&from=2021-03-14&to=2021-03-15&sortBy=popularity&apiKey=db38a6a574384b64accec67cdcaaa36f`, true);

    https.onload = function (e) {
        if (this.status === 200) { 
            const response = JSON.parse(this.response);

            // print the content
            let output = '';
            response.articles.forEach(function (articles) {
                output += `

              <div class="container1">
                  <img src=${articles.urlToImage} width= 350px>
                  <ul> 
                        <h3>${articles.title}</h3>
                        <h5>${articles.author}</h5>
                        <p>${articles.description}</p>
                        <a href=${articles.url}>Read more...</a> 
                 </ul>
            </div>
                `;

            });
            document.querySelector('#result').innerHTML = output;

        }
  
    };
    https.send();
    
    e.preventDefault();
  
};