const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/225';

// De basis url + de specefieke persoon
const myURL = baseURL + endpointMe;

getData(myURL).then(dataTymo => {
    //--- Variable zetten uit Json data ---\\
    // Info variables
    let jsonData = dataTymo.data.custom;
    let customData = JSON.parse(jsonData);
    let myAvatar = dataTymo.data.avatar;
    let myBio = dataTymo.data.bio;
    let myName = dataTymo.data.name;
    let myBirthDate = dataTymo.data.birthdate;
    let website = dataTymo.data.website;
    
    // Favorites variables
    let myColor = dataTymo.data.fav_color;
    let myFood = dataTymo.data.fav_kitchen;
    let myAttribute = dataTymo.data.fav_attribute;
    let myBook = dataTymo.data.fav_book_genre;
    let myFeature = dataTymo.data.fav_feature;
    let myProperty = dataTymo.data.fav_property;
    let myTag = dataTymo.data.fav_tag;
    //-------------------------------------\\

    console.log("data: ", dataTymo.data);
    console.log("customdata: ", customData);

    //--- Pak elementen uit de DOM ---\\
    // Firstbase clickArea
    let colorText = document.querySelector(".firstBaseClickArea .colorText");
    let foodText = document.querySelector(".firstBaseClickArea .foodText");
    let attributeText =  document.querySelector(".firstBaseClickArea .attributeText");
    let bookText = document.querySelector(".firstBaseClickArea .bookText");
    let featureText = document.querySelector(".firstBaseClickArea .featureText");
    let propertyText =  document.querySelector(".firstBaseClickArea .propertyText");
    let tagText =  document.querySelector(".firstBaseClickArea .tagText");
    
    // Secondbase clickArea
    let nameText = document.querySelector(".secondBaseClickArea .nameText");
    let birthdateText = document.querySelector(".secondBaseClickArea .birthdateText");
    let image =  document.querySelector(".secondBaseClickArea .avatar");

    // Thirdbase clickArea
    let hobbys = document.querySelector(".secondBaseClickArea .hobbys");
    //--------------------------------\\

    // Verander de elementen met de Json data
    image.src = dataTymo.data.avatar;
    nameText.textContent = myName;
    birthdateText.textContent = myBirthDate;
});

window.addEventListener("load", (event) => { EnableClickEvents(); });

function EnableClickEvents() {
    // Set all clickable elements
    var firstBase = document.getElementById("firstBase");
    var secondBase = document.getElementById("secondBase");
    var thirdBase = document.getElementById("thirdBase");

    window.onclick = e => {
        var clickedElement = e.target;

        // console.log(clickedElement);

        // Check if clicked element is clickable element
        switch (clickedElement) {
            case firstBase:
                firstBase.querySelector(".clickArea").classList.toggle("active");
                break;
            case secondBase:
                secondBase.querySelector(".clickArea").classList.toggle("active");
                break;
            case thirdBase:
                thirdBase.querySelector(".clickArea").classList.toggle("active");
                break;
            default:
                return;
                break;
        }
    }
}

// Get Json data
async function getData(URL) {
    return (
        fetch(URL)
            .then( response => response.json())
            .then( jsonData => { return jsonData })
    );
}