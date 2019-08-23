// Add item
$(function() {
    // Listen for submit (i.e., Add Item) on the page
    $("#js-shopping-list-form").submit(function(event) {
      // Show user's input and not disappear after form submission 
      event.preventDefault();
      // Get user's input
      const userInput = $(this).find("#shopping-list-entry").val();
      // Empty out shopping-list-entry field after form submission
      $("#shopping-list-entry").val("");
      // Append user's input to the shopping list
      $(".shopping-list").append(
        // Copied every line of li & replaced item with ${userInput}
        `<li>
          <span class="shopping-item">${userInput}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  });
  
  // Check item / Uncheck item
  $(function() {
    // Event delegation by setting $(".shopping-list") as the parent class. Then filter to ".shopping-item-toggle" as that is the button we want to track.
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
      // Finding the closest ("li") to $(this), then locate the ".shopping-item" and apply .toggleClass to "shopping-item_checked" as we only want the item description to be checked or unchecked.
      $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
  });
  
  // Remove item
  $(function() {
    // Event delegation by setting $(".shopping-list") as the parent class. Then filter to ".shopping-item-delete" as that is the button we want to track.
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
      // Finding the closest ("li") to $(this) and remove the entire ("li") when called.
      $(this).closest("li").remove();
    });  
  });