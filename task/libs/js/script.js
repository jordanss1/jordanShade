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

      success: (result) => console.log(result),
      error: (obj, details) => console.log(obj, details),
    });
  }
});
