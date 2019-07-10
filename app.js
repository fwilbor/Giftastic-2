console.log("Hello World");
$(document).ready(function () {
    var dogBreeds = ["Labrador", "Rottweiler", "Golden Retriever", "French Bulldog", "Pug", "German Sherperd", "Bull Dog", "Pit Bull", "Cane Corso", "Yorkshire Terrier"];
    for (i = 0; i < dogBreeds.length; i++) {
        var button = $("<button>");
        button.addClass("dogs");
        button.attr("data-breed", dogBreeds[i]);
        button.text(dogBreeds[i]);
        $("#buttonRow").append(button);

    }
    //onclick Function
    $(".dogs").on("click", function () {
        // alert("I'm Clicked!");
        var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
        // var breed = $(this).attr("data-breed");

        // // Constructing a queryURL using the animal name
        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        //     breed + "&api_key=WGWBBzegrcwH4GtMFyGfNU52gepxhpL2&limit=10";

        // // Performing an AJAX request with the queryURL
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        //     // After data comes back from the request
        //     .then(function (response) {
        //         console.log(queryURL);

        //         console.log(response);
        //         //fire ajax call to giphy api
        //         var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response);
        // });



        // });
    });
});

