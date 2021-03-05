//make a current forecast api call
//make a 5day forecast call
//get uv index info
//modify html with api info

const APIKey = "&Appid=7d9ece11f46ba8e3537ca6f0b9c718c2";
const openWeatherMapQuery = "https://api.openweathermap.org/data/2.5/weather?q="

$("#searchBtn").on("click", function(event){
    event.preventDefault();
    
    let input = $('#myCity').val();
    console.log(input);

    let openweathermapURL = openWeatherMapQuery + input + APIKey + "&units=imperial";
    console.log(openweathermapURL);

    // let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&Appid=" + "7d9ece11f46ba8e3537ca6f0b9c718c2" + "&units=imperial";
    // console.log(fiveDayUrl);


    $.ajax({
        url: openweathermapURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(response)
        console.log(response.main.humidity)
        console.log(response.main.temp)

        $(".temperature").html(response.main.temp)

    })
    .catch(err => {
        if (err) throw err;
    });


    
})