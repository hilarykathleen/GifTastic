//initial values

// var apiKey: "hcQ4oS9ljqo3Thqq1MdugzfJYIYMQ2QJ";

//Create an array of strings saved in variable topics

var buttons = ["cat", "dog", "armadillo", "narwhal"];

//function>for loop through array to create buttons for each element



    function cloneButtons() {
        $('.recent-search').empty();
    
        for (let i = 0; i < buttons.length; i++) {
            const buttonName = buttons[i];
    
            const button = `<div class="buttons">
                    <button
                        data-name="${buttonName}"
                        class="btn btn-search"
                    >
                    ${buttonName}
                    </button>
                    <button
                        data-name="${buttonName}"
                        class="btn btn-close fas fa-times">
                    </button>
            </div>`;
    
            $('.recent-search').append(button);
        }
    
}