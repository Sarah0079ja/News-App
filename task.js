document.querySelector('#load').addEventListener('click', loadNews);
document.addEventListener('click', loadNews);
function loadNews(e) {

    const xhr = new XMLHttpRequest();
    const text = document.querySelector('.new').value;

    xhr.open('GET', `https://newsapi.org/v2/everything?q=${text}&from=2019-12-28&sortBy=popularity&apiKey=5c49070b63254918ba7af41d02afc424`, true)

    xhr.onload = function (e) {
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

    }
    xhr.send();
    e.preventDefault();
}dr