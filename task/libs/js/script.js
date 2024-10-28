/// <reference path="./jquery.js" />

$("#submit_1").on("click", () => {
  const inputVal = $("#input_1").val();

  if (inputVal) {
    $.ajax({
      url: "libs/php/geocodeBackend.php",
      dataType: "json",
      data: {
        searchTerm: inputVal,
      },
      method: "POST",

      success: (result) => {
        console.log(result);

        if (result.status.code === 200) {
          
        }
      },
      error: (obj, details) => console.log(obj, details),
    });
  }
});

$("#submit_2").on("click", () => {
  const inputVal = $("#input_2").val();

  if (inputVal) {
    $.ajax({
      url: "libs/php/geocodeBackend.php",
      dataType: "json",
      data: {
        postalCode: inputVal,
      },
      method: "POST",

      success: (result) => console.log(result),
      error: (obj, details) => console.log(obj, details),
    });
  }
});

$("#submit_3").on("click", () => {
  const inputVal = $("#input_3").val();

  if (inputVal) {
    $.ajax({
      url: "libs/php/geocodeBackend.php",
      dataType: "json",
      data: {
        wikipediaSearch: inputVal,
      },
      method: "POST",

      success: (result) => console.log(result),
      error: (obj, details) => console.log(obj, details),
    });
  }
});
