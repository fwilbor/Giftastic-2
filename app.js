// console.log("Hello World");
// $(document).ready(function () {
//     var dogBreeds = ["Labrador", "Rottweiler", "Golden Retriever", "French Bulldog", "Pug", "German Sherperd", "Bull Dog", "Pit Bull", "Cane Corso", "Yorkshire Terrier"];
//     for (i = 0; i < dogBreeds.length; i++) {
//         var button = $("<button>");
//         button.addClass("dogs");
//         button.attr("data-breed", dogBreeds[i]);
//         button.text(dogBreeds[i]);
//         $("#buttonRow").append(button);

//     }

//Compile Dog Breed Array that will be used to Populate  Initial Breed Buttons
var dogBreeds = ["Labrador", "Rottweiler", "Golden Retriever", "French Bulldog", "Pug", "German Sherperd", "Bull Dog", "Pit Bull", "Cane Corso", "Yorkshire Terrier"];

$(document).ready(function () {


    function ajaxCall() {



    }





    function renderButtons() {

        $("#buttonRow").empty();
        for (var i = 0; i < dogBreeds.length; i++) {
            var a = $("<button>");
            a.attr("id", "dogs");
            a.attr("data-breed", dogBreeds[i]);
            a.text(dogBreeds[i]);
            $("#buttonRow").append(a);

        }

    }

    $("#add-breed").on("click", function (event) {

        event.preventDefault();
        var breed = $("#breed-input").val().trim();
        dogBreeds.push(breed);
        renderButtons();



    });


    $(document).on("click", "#dogs", function () {

        //javascript, jQuery
        // alert("I'm Clicked!");
        //Grabbing and storing the data-breed property value from the button
        var breed = $(this).attr("data-breed");



        //Construct a queryURL using the breed name

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            breed + "&api_key=WGWBBzegrcwH4GtMFyGfNU52gepxhpL2&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);

                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;

                //Looping through each result item
                for (var i = 0; i < results.length; i++) {


                    // Creating and storing a div tag
                    var breedDiv = $("<div>");

                    //Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + results[i].rating);


                    //Creating and storing an Image Tag

                    var breedImage = $("<img>");

                    //Setting the src attribute of the image to a property pulled off the result item
                    breedImage.attr('src', //set the source here)
                        console.log(breedImage));

                    //Appeding the paragraph and image tag to the breedDiv
                    breedDiv.append(p);
                    breedDiv.append(breedImage);

                    //Prepending the breedDivto the HTML page in the "#imageGoHere" div
                    $("#imagesGoHere").prepend(breedDiv);



                }
            });

    })
    renderButtons();


});
    // //onclick Function
    // $(".dogs").on("click", function () {

    //     var breed = $(this).attr("data-breed");

    //     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WGWBBzegrcwH4GtMFyGfNU52gepxhpL2&q=" + breed + "&limit=10&offset=0&rating=Y&lang=en";


    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);
    //     });
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
    //     });
    // });

