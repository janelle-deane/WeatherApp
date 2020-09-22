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
  
    // 5 Day Forecast puils request and adds it to the page
      var icon=response.list[8].weather[0].icon
      console.log(icon);
      var iconUrl ="http://openweathermap.org/img/w/" + icon + ".png";
      weatherIcon=$(`.weatherPic-8`).attr("src", iconUrl);
      var date8=$(".date8");
      date8.text(moment().add(1, 'day').format('L'))
      var temp8= $(".temp8");
      temp8.text("Temperature: "+ response.list[8].main.temp + "F")
      var humidity8= $(".humidity8");
      humidity8.text("Humidity: "+ response.list[8].main.humidity+"%");
  
      var icon=response.list[16].weather[0].icon
      console.log(icon);
      var iconUrl ="http://openweathermap.org/img/w/" + icon + ".png";
      weatherIcon=$(`.weatherPic-16`).attr("src", iconUrl);
      var date16=$(".date16");
      date16.text(moment().add(2, 'day').format('L'));
      var temp16= $(".temp16");
      temp16.text("Temperature: "+ response.list[16].main.temp + "F")
      var humidity16= $(".humidity16");
      humidity16.text("Humidity: "+ response.list[16].main.humidity+"%");
  
      var icon=response.list[24].weather[0].icon
      console.log(icon);
      var iconUrl ="http://openweathermap.org/img/w/" + icon + ".png";
      weatherIcon=$(`.weatherPic-24`).attr("src", iconUrl);
      var date24=$(".date24");
      date24.text(moment().add(3, 'day').format('L'));
      var temp24= $(".temp24");
      temp24.text("Temperature: "+ response.list[24].main.temp + "F")
      var humidity24= $(".humidity24");
      humidity24.text("Humidity: "+ response.list[24].main.humidity+"%");
  
      var icon=response.list[32].weather[0].icon
      console.log(icon);
      var iconUrl ="http://openweathermap.org/img/w/" + icon + ".png";
      weatherIcon=$(`.weatherPic-32`).attr("src", iconUrl);
      var date32=$(".date32");
      date32.text(moment().add(4, 'day').format('L'));
      var temp32= $(".temp32");
      temp32.text("Temperature: "+ response.list[32].main.temp + "F")
      var humidity32= $(".humidity32");
      humidity32.text("Humidity: "+ response.list[32].main.humidity+"%");
  
      var icon=response.list[39].weather[0].icon
      console.log(icon);
      var iconUrl ="http://openweathermap.org/img/w/" + icon + ".png";
      weatherIcon=$(`.weatherPic-40`).attr("src", iconUrl);
      var date40=$(".date40");
      date40.text(moment().add(5, 'day').format('L'));
      var temp40= $(".temp40");
      temp40.text("Temperature: "+ response.list[39].main.temp + "F")
      var humidity40= $(".humidity40");
      humidity40.text("Humidity: "+ response.list[39].main.humidity+"%");
  
    });
})
//take input from search input
//save city search to local storage and append page


