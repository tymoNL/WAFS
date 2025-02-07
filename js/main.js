const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/225';

// De basis url + de specefieke persoon
const myURL = baseURL + endpointMe;

getData(myURL).then(dataTymo => {
    // Pak het h1 element uit de dom
    let scoreBoardText = document.querySelector(".text");

    // Variable zetten met de naam uit data
    let myName = dataTymo.data.name; 

    // Verander de tekst in het h1 element
    scoreBoardText.textContent = myName;

});


async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}


window.addEventListener("load", (event) => {
    EnableClickEvents();
});

function EnableClickEvents() {
    // Set all clickable elements
    var firstBase = document.getElementById("firstBase");
    var secondBase = document.getElementById("secondBase");
    var thirdBase = document.getElementById("thirdBase");

    window.onclick = e => {
        var clickedElement = e.target;

        console.log(clickedElement);

        // Check if clicked element is clickable element
        switch (clickedElement) {
            case firstBase:
                firstBase.querySelector(".clickArea").classList.toggle("active");
                break;
            case secondBase:

                break;
            case thirdBase:

                break;
            default:
                return;
                break;
        }
    }
}