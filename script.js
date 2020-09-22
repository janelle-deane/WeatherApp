// Variables defined

var submitBtn=$("#submitBtn");
// var city= $("#userInput").val().trim()

// On click event 
submitBtn.on("click", function(event){
    console.log("you clicked submit")
    var city= $("#userInput").val().trim();
    event.preventDefault();
    console.log(typeof city);
    console.log(city);
   
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=a1ca936a3130768c6b2cc6e68abbd3ec";
    

    // AJAX request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // Store all of the retrieved data inside of an object called "response"
    .then(function(response){
      // Log the queryURL
      console.log(queryURL);
      // Log the resulting object
      console.log(response.city.name);
      // Add it to the made elements
      var name= $(".city")
      name.text(response.city.name+"-" + moment().format('L'));

      console.log(response.list[0].main.temp);
      var temp= $("#temp");
      temp.text("Temperature: "+ response.list[0].main.temp + "F");

      console.log(response.list[0].main.humidity);
      var humidity= $("#humidity");
      humidity.text("Humidity: "+ response.list[0].main.humidity+"%");
      
      console.log(response);

      var wind= $("#wind");
      wind.text("Wind Speed: "+ response.list[0].wind.speed + "MPH");
  
    for (var i = 8; i < 41; i+8) {
      var icon=response.list[i].weather[0].icon
      console.log(icon);
      var iconUrl ="http://openweathermap.org/img/w/" + icon + ".png";
      weatherIcon=$(`.weatherPic-${i}`).attr("src", iconUrl);
      // var date5=$("date5").text(moment().add(4, 'day').format('L'))
      // card.append(weatherIcon)
    }
  });
})
//take input from search input
//save city search to local storage and append page

//take 5 day data and put images on page
