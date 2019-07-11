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
//     //onclick Function
//     $(".dogs").on("click", function () {
//         var breed = $(this).attr("data-breed");
//         var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WGWBBzegrcwH4GtMFyGfNU52gepxhpL2&q=" + breed + "&limit=10&offset=0&rating=Y&lang=en";
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function (response) {
//             console.log(response);
//         })
//     })
// })
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
        var breed = $(this).attr("data-breed");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WGWBBzegrcwH4GtMFyGfNU52gepxhpL2&q=" + breed + "&limit=10&offset=0&rating=Y&lang=en";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // Storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                // Creating and stroring a div tag
                var breedDiv = $("<div>");
                // Creating a paragraph tag with the resulting gifs rating
                p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var breedImage = $("<img>");

                // Setting the src attribute of the image to a property pulled off the result item
                breedImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the breedDiv
                breedDiv.append(p);
                breedDiv.append(breedImage);

                // Prepending the breedDiv to the HTML page in the "#breedImagesGoHere" div
                $("#breedImagesGoHere").prepend(breedDiv);

            }

        });
    });
});
