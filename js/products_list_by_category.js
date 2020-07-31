'use strict';

// window.addEventListener('resize', hideModalUponResize);

function toggleFilters() {
    let filters = document.getElementById('filters');
    let cln = filters.cloneNode(true);
    let modalBody = document.getElementById('modal-body');
    if(!modalBody.hasChildNodes()) {
        modalBody.appendChild(cln);
    }
}

function hideModalUponResize() {
    let modal = document.getElementById('filters-modal');
    if(window.matchMedia("(min-width:769px)").matches && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
}

// Filter ranges (price)
function setFilterRanges() {
    /* Main filters block */
    const lowerSlider = document.querySelector('#lower');
    const upperSlider = document.querySelector('#upper');

    document.querySelector('#two').innerHTML = upperSlider.value;
    document.querySelector('#one').innerHTML = lowerSlider.value;

    let lowerVal = parseInt(lowerSlider.value);
    let upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        document.querySelector('#two').innerHTML=this.value;
        if (upperVal <= lowerVal) {
            document.querySelector('#one').innerHTML = this.value;
            document.querySelector('#two').innerHTML = lowerVal;
        }
    };

    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        document.querySelector('#one').innerHTML=this.value;
        if (lowerVal >= upperVal) {
            document.querySelector('#one').innerHTML = upperVal;
            document.querySelector('#two').innerHTML = this.value;
        }
    };

    /* Modal filters block */

    const lowerSliderModal = document.querySelector('#modal-lower');
    const upperSliderModal = document.querySelector('#modal-upper');

    document.querySelector('#modal-two').innerHTML = upperSliderModal.value;
    document.querySelector('#modal-one').innerHTML = lowerSliderModal.value;

    let lowerValModal = parseInt(lowerSliderModal.value);
    let upperValModal = parseInt(upperSliderModal.value);

    upperSliderModal.oninput = function () {
        lowerValModal = parseInt(lowerSliderModal.value);
        upperValModal = parseInt(upperSliderModal.value);
        document.querySelector('#modal-two').innerHTML=this.value;
        if (upperValModal <= lowerValModal) {
            document.querySelector('#modal-one').innerHTML = this.value;
            document.querySelector('#modal-two').innerHTML = lowerValModal;
        }
    };

    lowerSliderModal.oninput = function () {
        lowerValModal = parseInt(lowerSliderModal.value);
        upperValModal = parseInt(upperSliderModal.value);
        document.querySelector('#modal-one').innerHTML=this.value;
        if (lowerValModal >= upperValModal) {
            document.querySelector('#modal-one').innerHTML = upperValModal;
            document.querySelector('#modal-two').innerHTML = this.value;
        }
    };
}

function searchList() {
    $(document).ready(function(){
        $("#categories-filter .searchInput").on("keyup", function() {
            let value = $(this).val().toLowerCase();
            $("#categories-filter .checkbox-container").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    $(document).ready(function(){
        $("#brands-filter .searchInput").on("keyup", function() {
            let value = $(this).val().toLowerCase();
            $("#brands-filter .checkbox-container").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    $(document).ready(function(){
        $("#modal-categories-filter .searchInput").on("keyup", function() {
            let value = $(this).val().toLowerCase();
            $("#modal-categories-filter .checkbox-container").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    $(document).ready(function(){
        $("#modal-brands-filter .searchInput").on("keyup", function() {
            let value = $(this).val().toLowerCase();
            $("#modal-brands-filter .checkbox-container").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}

function fillQuantities() {
    let categories_blocks = document.querySelectorAll('.categories-quantity');
    let categories_number = document.querySelectorAll('#categories-filter .checkbox-container').length;
    categories_blocks.forEach(function(item) {
        item.innerHTML = categories_number;
    });

    let brands_blocks = document.querySelectorAll('.brands-quantity');
    let brands_number = document.querySelectorAll('#brands-filter .checkbox-container').length;
    brands_blocks.forEach(function(item) {
        item.innerHTML = brands_number;
    });
}

// function toggleFilters(event) {
//     let elem = event.target.id;
//     const link = document.getElementById(elem);
//     const filterName = document.querySelector(`#${elem} + div`);
//     link.classList.toggle('red-color');
//     filterName.classList.toggle('visible');
// }
