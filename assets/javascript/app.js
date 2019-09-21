//initial values

//Create an array of strings saved in variable topics

let buttons = ['cat', 'dog', 'armadillo', 'narwhal'];

//function>for loop through array to create buttons for each element


function displayButtons() {
        $('.recent-search').empty();
    
        for (let i = 0; i < buttons.length; i++) {
            let buttonName = buttons[i];
            console.log(buttonName);
            
            let button = `<div class="wrap-buttons">
                    <button class="btn btn-search"
                    data-name="${buttonName}">
                    ${buttonName}</button>
                    <button data-name="${buttonName}"
                    class="btn btn-delete"></button>
            `;

            $('.recent-search').append(button);
        }
    }

    displayButtons();
                        