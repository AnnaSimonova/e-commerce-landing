'use strict';

function toggleToFavouritesBtn() {
    Array.prototype.slice.call(document.getElementsByClassName('add_to_favourites')).map(function (btn) {
        btn.addEventListener('click', function() {
            btn.classList.toggle('in_favs');
        });
    });
}

function prolongSearchBar() {
    let search = document.querySelector('.search');
    let input_field = search.querySelector('.search-field');
    let button = search.querySelector('button');

    if(window.matchMedia("(min-width: 1320px)").matches) {
        search.addEventListener('mousedown', function() {
            search.style.width = '480px';
            search.style.transition = 'width 1s';
            search.style.webkitTransition = 'width 1s';
            search.style.mozTransition = 'width 1s';
        });
    }
}


