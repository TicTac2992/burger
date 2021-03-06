// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevouredBurger = {
      devour: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredBurger
    }).then(
      function() {
        console.log("devoured that burger quick, boiii", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("We have a new burger...");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

console.log("Can you see me?");