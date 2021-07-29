function getObject(apiRes){
    const obj = {}
    obj["title"] = apiRes["title"]
    obj["url"] = apiRes["url"]
    obj["img"] = apiRes["multimedia"][0]["url"]  
    obj["abstract"] = apiRes["abstract"]
    obj["byline"] = apiRes["byline"]
    return obj
}

function createHTMLResponse(obj_1, obj_2){


    // Array 1
    const link_1 = obj_1["url"]
    const img_1 = obj_1["img"]
    const abstract_1 = obj_1["abstract"]
    const byline_1 = obj_1["byline"]
    const title_1 = obj_1["title"]
    
    // Array 2
    const link_2 = obj_2["url"]
    const img_2 = obj_2["img"]
    const abstract_2= obj_2["abstract"]
    const byline_2 = obj_2["byline"]
    const title_2 = obj_2["title"]


    // HTML rendering 
    const newsSection = `

<body>
    <section class="container", style="display:flex; flex-direction:column">
        <header>
            <h2>${title_1}</h2>
            <a href=${link_1}>Article here</a>
        </header>
        <a href=${link_1}><img src=${img_1} alt="" style="width: 100%;
        object-fit: cover;"></a>
        <article>
           ${abstract_1}
        </article>
        <p>${byline_1}</p>
    </section>

    <hr><hr/>

    <section class="container", style="display:flex; flex-direction:column">
        <header>           
            <h2>${title_2}</h2>
            <a href=${link_2}>Lnk here</a>
        </header>
        <a href=${link_2}><img src=${img_2} alt=""></a>

        <article>
           ${abstract_2}
        </article>
        <p>${byline_2}</p>
    </section>
    
    <hr><hr/>

</body>
`
    return newsSection

}

function htmlWorkflow(articles){
    let [obj1, obj2] = articles.map(item=>getObject(item))
    let html = createHTMLResponse(obj1, obj2)
    return html
}

function getRandomIndices(max, n_indices = 2){
    var arr = [];
    while(arr.length < n_indices){
        var r = Math.floor(Math.random() * max) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return (arr);
}

function getRadnomizedArticles(n_indices=2){
    let data = require('./data/world.json')
    let results = data["results"]
    let length = results.length
    let randomIndices = getRandomIndices(length, n_indices)
    let reqArticles = randomIndices.map((index)=> results[index])
    return reqArticles
}

exports.createHTMLResponse = createHTMLResponse
exports.getObject = getObject
exports.htmlWorkflow = htmlWorkflow