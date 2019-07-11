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
        })
    })
});
