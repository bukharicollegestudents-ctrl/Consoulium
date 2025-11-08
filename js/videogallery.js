
$(document).ready(function () {
    // Initialize Isotope
    var $grid = $('.custom-grid').isotope({
        itemSelector: '.custom-grid-item',
        layoutMode: 'fitRows'
    });

    // Ensure all items are displayed after the page has fully loaded
    $(window).on('load', function () {
        $grid.isotope('layout');
    });

    // Filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-button-group .custom-square-btn').removeClass('is-checked');
        $(this).addClass('is-checked');
    });

    // Modal functionality
    var modal = document.getElementById('video-modal');
    var modalContent = modal.querySelector('.modal-content');
    var modalVideo = modal.querySelector('.modal-video');
    var closeBtn = modal.querySelector('.close');

    document.querySelectorAll('.video-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = 'block';
            modalVideo.src = this.href;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        modalVideo.src = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalVideo.src = '';
        }
    });
});
