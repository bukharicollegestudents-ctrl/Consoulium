$(document).ready(function () {
    // Initialize Isotope
    var $grid = $('.custom-grid').isotope({
        itemSelector: '.custom-grid-item',
        layoutMode: 'fitRows'
    });

    // Initialize Magnific Popup
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Pagination
    var itemsPerPage = 39;
    var currentPage = 1;
    var totalItems = $('.custom-grid-item').length;
    var totalPages = Math.ceil(totalItems / itemsPerPage);

    function showPage(page) {
        currentPage = page;
        var start = (currentPage - 1) * itemsPerPage;
        var end = start + itemsPerPage;

        $('.custom-grid-item').hide().slice(start, end).show();
        $grid.isotope('layout');

        // Update pagination buttons
        $('.pagination-btn').removeClass('active');
        $('.pagination-btn[data-page="' + page + '"]').addClass('active');

        // Disable/Enable prev/next buttons
        if (page === 1) {
            $('.pagination-btn[data-page="prev"]').prop('disabled', true);
        } else {
            $('.pagination-btn[data-page="prev"]').prop('disabled', false);
        }

        if (page === totalPages) {
            $('.pagination-btn[data-page="next"]').prop('disabled', true);
        } else {
            $('.pagination-btn[data-page="next"]').prop('disabled', false);
        }
    }

    $('.pagination-btn').on('click', function () {
        var page = $(this).data('page');

        if (page === 'prev') {
            page = currentPage - 1;
        } else if (page === 'next') {
            if (currentPage === totalPages) {
                // Load new items when on the last page
                loadMoreItems();
            } else {
                page = currentPage + 1;
            }
        }

        showPage(page);
    });

    // Function to load more items
    function loadMoreItems() {
        // Simulate loading new items (replace this with your actual loading logic)
        var newItems = '<div class="custom-grid-item">New Item 1</div>' +
                       '<div class="custom-grid-item">New Item 2</div>' +
                       '<div class="custom-grid-item">New Item 3</div>';

        // Append new items to the grid
        var $newItems = $(newItems);
        $grid.append($newItems).isotope('appended', $newItems);

        // Update total items and total pages
        totalItems = $('.custom-grid-item').length;
        totalPages = Math.ceil(totalItems / itemsPerPage);

        // Show the new page
        showPage(currentPage + 1);
    }

    // Initialize the first page
    showPage(1);
});
