var appId = "69b9fedc";
var appKey = "0755bcccaf4a8a7bce10f790e8db7678";



$("#clickMe").on("click", function(event){
    event.preventDefault();
    var queryString = $("#searchWord").val().trim();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryString + "&api-key=" + appKey;

    $.ajax({
        url: url,
        method: 'GET'
    });
});




//https://developer.yummly.com/documentation

// Performing GET requests to search for recipes
// The base url for the Search Recipes GET is http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters
// Some of the parameters support passing multiple values; in these cases, we follow the AJAX convention: param[]=value1&param[]=value2&…
// Don’t forget to URL-encode parameter names and values (i.e., [ and ] become %5B and %5D).
// This sample illustrates the structure of Search Recipes response.

// $.ajax({
//     url: url,
//     method: 'GET'
// }).done(function (result) {
//     console.log(result);
//     var newArticleDiv = $("<div>");
//     var data = result.response.docs;
//     for (var i = 0; i < data.length; i++) {
//         newArticleDiv.append("<strong>" + data[i].snippet + "</strong><br>");
//         newArticleDiv.append("<em>" + data[i].web_url + "</em><br><br>");
//     }
//     $("#wellSection").append(newArticleDiv);
// });

// });

// $("#clearAll").on("click", function () {
// $("#wellSection").empty();
// });