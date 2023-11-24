var MsVportal = {};
var pageIndex = 1;


jQuery(document).ready(function (e) {

    (function ($) {

        var shortUri = $('#shortUri').val();
        var itemTotal = $('#itemTotal').val();

        if (itemTotal > 0) {
            showLoadmoreBtn();
        }

        $('#posts__tab li a').click(function (event) {
            pageIndex = 1;
            $('#posts__tab a').removeClass('active');
            currentSection = $(this).data('target');
            $(this).addClass('active');
            MsVportal.loadNews(1, 'loadTab', currentSection);
            return false;
        });

        $('#loadmore-news').click(function (event) {
            var itemTotal = $('#itemTotal').val();
            var itemPerPage = $('#itemPerPage').val();
            var currentSection = $('#currentSection').val();
            var modulusPage = itemTotal % itemPerPage > 0 ? 1 : 0;

            var totalPages = parseInt(itemTotal / itemPerPage) + modulusPage;

            var searchPage = 1;

            if ($('#resultSearch').val() == 1) {
                searchPage = parseInt($('#searchPage').val()) + 1;
            }
            pageIndex++;
            MsVportal.loadNews(pageIndex, 'paging', currentSection);
            if (totalPages <= pageIndex) {
                $(this).hide();
            }
            return false;
        });

        // if ($('#equitystory-block').length > 0) {
        //     $.ajax({
        //         url: domain + '/news-ajax/2021-equitystory-news.1.html',
        //         dataType: 'json',
        //         success: function (result) {
        //             $('#equitystory-block').html(result);
        //         }
        //     });
        // }

        // if ($('#newsroom-block').length > 0) {
        //     $.ajax({
        //         url: domain + '/news-ajax/2021-newsroom-news.1.html',
        //         dataType: 'json',
        //         success: function (result) {
        //             $('#newsroom-block').html(result);
        //         }
        //     });
        // }
    })(jQuery);

});

function showLoadmoreBtn() {

    var itemTotal = $('#itemTotal').val();
    var itemPerPage = $('#itemPerPage').val();
    var modulusPage = itemTotal % itemPerPage > 0 ? 1 : 0;
    var totalPages = parseInt(itemTotal / itemPerPage) + modulusPage;
    if (totalPages > 1) {
        $('#loadmore-news').show();
    } else {
        $('#loadmore-news').hide();
    }
}

MsVportal = (function ($) {

    return {

        loadNews: function (page, type, currentSection) {

            var shortUri = $('#shortUri').val();
            var url = shortUri + currentSection + '.' + page + '.html';
            var url_string = window.location.href;
            var domainSite = new URL(url_string);
            var keywork = domainSite.searchParams.get("content");
            if (keywork) {
                url = url + '?content=' + keywork + '&action=search';
            }
            if ($('#search-section').length > 0) {
                var url_string = window.location.href;
                var url = new URL(url_string);
                var content = url.searchParams.get("content");
                var url = shortUri + currentSection + '.' + page + '.html?action=search&content=' + content;
            }
            $.ajax({
                url: url,
                dataType: 'json',
                success: function (result) {

                    if (type == 'paging') {
                        $('#posts__list').append(result);
                    } else {
                        $('#posts__list').html(result);
                        showLoadmoreBtn();
                    }
                    if ($(".container-macy").length > 0) {
                        initMacy();
                    }
                }
            });
        }


    }

})(jQuery);

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Desktop: function () {
        return navigator.userAgent.match(/Windows NT/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};