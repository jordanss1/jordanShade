/// <reference path="./jquery.js" />

$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(1000)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});

$("#submit_1").on("click", () => {
  const inputVal = $("#input_1").val();

  if (inputVal) {
    $("#message").empty();
    $("#results").empty();
    $("#results_label").empty();
    $("#results_label").html("Search results with name and population");

    $.ajax({
      url: "php/geocodeBackend.php",
      dataType: "json",
      data: {
        searchTerm: inputVal,
      },
      method: "POST",

      success: (results) => {
        console.log(results);

        if (results.status.code === "200" && results.data.length > 0) {
          results.data.forEach((element) => {
            $("#results").append(
              `<li>${element.name} - ${element.population}</li>`
            );
          });
        } else {
          $("#message").html("No results found");
        }
      },
      error: (obj, details) => console.log(obj, details),
    });
  }
});

$("#submit_2").on("click", () => {
  const inputVal = $("#input_2").val();

  if (inputVal) {
    $("#message").empty();
    $("#results").empty();
    $("#results_label").empty();
    $("#results_label").html("Nearby places with postalcode");

    $.ajax({
      url: "libs/php/geocodeBackend.php",
      dataType: "json",
      data: {
        postalCode: inputVal,
      },
      method: "POST",

      success: (results) => {
        console.log(results);

        if (results.data.status?.message || results.data.length > 0) {
          $("#message").html(
            results.data.status.message
              ? results.data.status.message
              : "No results found"
          );
        } else {
          results.data.postalCodes.forEach((element) => {
            $("#results").append(
              `<li>${element.placeName} - ${element.postalCode}</li>`
            );
          });
        }
      },
      error: (obj, details) => console.log(obj, details),
    });
  }
});

$("#submit_3").on("click", () => {
  const inputVal = $("#input_3").val();
  console.log(inputVal);

  $("#message").empty();
  $("#results").empty();
  $("#results_label").empty();
  $("#results_label").html("Wikipedia entries found");

  $.ajax({
    url: "libs/php/geocodeBackend.php",
    dataType: "json",
    data: {
      wikipediaSearch: inputVal,
    },
    method: "POST",

    success: (results) => {
      console.log(results);

      if (results.status.code === "200" && results.data.length > 0) {
        results.data.forEach((element) => {
          $("#results").append(
            `<li>${element.summary} - ${element.wikipediaUrl}</li>`
          );
        });
      } else {
        $("#message").html("No results found");
      }
    },
    error: (obj, details) => console.log(obj, details),
  });
});
