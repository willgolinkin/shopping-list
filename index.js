
//runs when DOM/page loads
$(function() {
    //test for jquery linking to html (working)
    //$("h1").text("fskjfsjasfd;ljasfj");
        $("#js-shopping-list-form").submit(event => {
        // this stops the default form submission behavior (reloading)
        event.preventDefault();
        //creates variable for user-entered input value
        let addedItem = $("#shopping-list-entry").val();
        //logs entered input value correctly
        console.log(addedItem);
        //empties input after adding item
        //unsure of how to restore placeholder text once item added
        $('#shopping-list-entry').val(" ");
        //why do I not need a click function event listener for the add item
        //to trigger the callback function that appends a new item to the list?
        //the answer has to be b/c we are still within the the form element, not ul
        $(".shopping-list").append(
            `<li>
                <span class="shopping-item">${addedItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
         );
    });
    
    //toggle button to check items off list when clicked
    //event delegation to trigger event on click of shopping-item-toggle class button
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        //variable for item being selected; closest selects higher li and then finds the item within that li with find
        let checkedItem = $(this).closest("li").find(".shopping-item");
        console.log(checkedItem);
        //changes toggleClass to shopping-item__checked, which then applies strikethrough styling from CSS file
        checkedItem.toggleClass("shopping-item__checked");
    });

    //deletes only binded items; no event delegation
    /*
    $(".shopping-item-delete").click(function(event) {
        $(this).closest("li").remove();
    });
    */

    //deletes closest ancestor up the DOM tree and uses event
    //delegation to avoid not being able to click
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });
    
});


/*Hint: you may find it helpful to read up on
and use the following
jQuery methods: .submit(), preventDefault(), 
toggleClass(), and closest().*/

/*enter items they need to purchase by 
entering text and hitting "Return" 
or clicking the "Add item" button
check and uncheck items on the list 
by clicking the "Check" button
permanently remove items from the list*/