// Initialize the news api parameters
let apiKey = 'd5093af9b82fa9dbe80c2fcedefd1e57'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://api.mediastack.com/v1/news?access_key=${apiKey}&sources=cnn,-bbc&languages=en`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.data;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            // console.log(element)
            let news = `<div class="card mb-3">
                            <div class="row">
                                <div class="col-md-4 col-12">
                                <img
                                    src="${element["image"]}" 
                                    onerror="this.src = 'news.jpg';"
                                    class="img-fluid"
                                />
                                </div>
                                <div class="col-md-8 col-12">
                                    <small class="text-muted my-2">${element["published_at"]}</small>
                                    <h4 class="card-title">${element["title"]}</h4>
                                    <p class="card-text">${element["description"]}.. 
                                    <span class="text-gradient"> <a href="${element['url']}" target="_blank" >Read</a> </span>
                                    </p>
                                </div>
                            </div>
                            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


