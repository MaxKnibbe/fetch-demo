const url = "https://swapi.dev/api/people/4?format=json";

(async () => {
    try {
        //Get Data
        const response = await fetch(url);
        const data = await response.json();

        //Select DOM elements
        const el = { 
            name : document.getElementById("name"),
            eye_color : document.getElementById("eye_color")
        };

        console.log({el});

        //Hydrate DOM elements with data
        const hydrate = () => {
            el.name.innerHTML = data.name;
            el.eye_color.innerHTML = data.eye_color;
            el.eye_color.style.color = data.eye_color;
        }

        hydrate();
    } catch(error) {
        console.log(error);
    }
})()

