var dogBreeds = ["Labrador", "Rottweiler", "Golden Retriever", "French Bulldog", "Pug", "German Sherperd", "Bull Dog", "Pit Bull", "Cane Corso", "Yorkshire Terrier"];

function renderButtons() {
    $("#buttonRow").empty();
    for (var i = 0; i < dogBreeds.length; i++) {
        var a = $("<button>");
        a.attr("class", "dogs");
        a.attr("data-breed", dogBreeds[i]);
        a.text(dogBreeds[i]);
        $("#buttonRow").append(a);
    }
}


$("#add-breed").on("click", function (event) {
    console.log("I've been Clicked!")

    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();
    $("buttonRow").empty();
    // This line will grab the text from the breed-input box
    var breed = $("#breed-input").val().trim();
    // The breed from the textbox is then added to our array
    dogBreeds.push(breed);
    renderButtons();
    $('#breed-input').val("");

})

$(document).on('click', '.dogs', function () {

    var breed = $(this).attr("data-breed");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=pHjOU1Gwyk9svF7vxlPz79wnSCnZny8a&q=" + breed + "&limit=10&offset=0&rating=G&lang=en";
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
    })

})

renderButtons();

$(".gif").on("click", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});