//initial values

//Create an array of strings saved in variable topics

let topics = ['cat', 'dog', 'armadillo', 'narwhal'];
let API_KEY = 'hcQ4oS9ljqo3Thqq1MdugzfJYIYMQ2QJ';
let endpoint = 'http://api.giphy.com/v1/gifs/search?api_key=hcQ4oS9ljqo3Thqq1MdugzfJYIYMQ2QJ';

function loadTopics() {
    let listTopics = JSON.parse(localStorage.getItem('topics'));
    topics = listTopics
}

//function for loop through array to create buttons for each element

function displayButtons() {
        $('.recent-search').empty();
    
        for (let i = 0; i < topics.length; i++) {
            let buttonName = topics[i];
            // console.log(buttonName);
            
            let button = `<div class="wrap-buttons">
                    <button class="btn btn-search"
                    data-name="${buttonName}">
                    ${buttonName}</button>
                    `;

            $('.recent-search').append(button);
        }
        localStorage.setItem('topics', JSON.stringify(topics));

    }

    loadTopics();
    displayButtons();

    //function to create layout for giphy (structure for giphys)

    function giphyLayout(giphy) {
        
       let images = giphy.images;
        
        return `<div class="giphy">
                
                <div class="giphy-image">
                    <img
                        src="${images.original_still.url}"
                        data-still="${images.original_still.url}"
                        data-animate="${images.original.url}"
                        data-state="still"
                    />
                    <i class="fa fa-play img-play"></i>
                </div>
                <div class="giphy-info">
                    <p>Rating: ${giphy.rating}</p>
                </div>
               
        </div>`;

        return template;
    }
    

//function to loop through giphy array to display

function displayGiphys(giphys) {

    $('.giphy-display').empty(); //empty content first before creating giphy display

    for (let i = 0; i < giphys.length; i++) {
        let giphy = giphys[i];
        let giphyTemplate = giphyLayout(giphy);
        $('.giphy-display').append(giphyTemplate);
        
    }
}

// function to grab giphy data from url 

function fetchGiphy(value) {

    let url = endpoint + '&q=' + value + '&limit=10';

    $.ajax({ url: url })
    .then(function(response) {
        //response.data
        let giphys = response.data;

        displayGiphys(giphys);
        // console.log(data);

    })
    .catch(function(error) {
        // console.log(error);

    });

}

//function to search for topic entered in for input by user

function searchGiphy (event) {
    event.preventDefault();

    let value = $("#form-input").val();

    topics.push(value);
    displayButtons();

    fetchGiphy(value);

    
    console.log(value);
    
}

//function to animate or still giphy



function imgClick() {
   let giphyCard = $(this);

    let image = giphyCard.find('img');
    
    let still = image.attr('data-still');
    let animate = image.attr('data-animate');
    let state = image.attr('data-state');

    if (state === 'still') {
        image.attr({
            src: animate,
            'data-state': 'animate'
        });
    } else {
        image.attr({
            src: still,
            'data-state': 'still'
        });
    }
}




//events

$(document).on('click', '.giphy-image', imgClick);

$("#submit-button").on("click", searchGiphy); 







                        