let results = []
let searchBool = true;
let data;
let searchDiv = document.getElementById("main-page");
let searchButton = document.getElementById('input-field')

function addStuff(){
    let search = searchButton.value;
    if(search.length > 0 && searchBool === true){

        let resultDiv = document.createElement("div");
        resultDiv.id = "results";

        let searchHeader = document.createElement("div");
        searchHeader.id = "search-header";

        resultDiv.appendChild(searchHeader);

        searchDiv.appendChild(resultDiv);
        searchDiv.r

        if(search.toLowerCase() === "beaches" || search.toLowerCase() === "beach"){
            data.beaches.forEach(element => {
                resultDiv.appendChild(addData(element.imageUrl,element.name ,element.description));
            })

        }else if(search.toLowerCase() === "temples" || search.toLowerCase() === "temple"){
            data.temples.forEach(element => {
                resultDiv.appendChild(addData(element.imageUrl,element.name ,element.description));
            })
        }else if(search.toLowerCase() === "countries" || search.toLowerCase() === "country"){
            data.countries.forEach(x => {
                x.cities.forEach((element) => {
                    resultDiv.appendChild(addData(element.imageUrl,element.name,element.description));
                })
            })
        }
        searchBool = false;
    }
}

function clearSearch(){
    if(!searchBool){
        searchBool = true;
        let element = document.getElementById("results");
        searchDiv.removeChild(element);
        searchButton.innerText = "";
    }
}
function addData(imgUrl, title, information){
    let searchResultDiv = document.createElement("div");
    searchResultDiv.className = "search-result";

    let posterDiv = document.createElement("div");
    posterDiv.className = "poster";

    let imageElement = document.createElement("img");
    imageElement.src = `./backgroundImage/${imgUrl}`;
    imageElement.id = "imageElement";
    imageElement.className = "search-img";

    let pictureInfoDiv = document.createElement("div");
    pictureInfoDiv.className = "picture-info";

    let titleDiv = document.createElement("h3");
    titleDiv.id = "titleInfo"
    titleDiv.innerText = title

    let paragraphDiv = document.createElement("p");
    paragraphDiv.id = "paragraphInfo";
    paragraphDiv.innerText = information;

    let buttonDiv = document.createElement("button");

    buttonDiv.id = "book";
    buttonDiv.innerText = "book"

    pictureInfoDiv.appendChild(titleDiv);
    pictureInfoDiv.appendChild(paragraphDiv);
    pictureInfoDiv.appendChild(buttonDiv);

    posterDiv.appendChild(imageElement);
    posterDiv.appendChild(pictureInfoDiv);

    searchResultDiv.appendChild(posterDiv);
    return searchResultDiv;
}

fetch("./data/travel_recommendation_api.json")
    .then(response => response.json())
    .then(json => data = json);