(function ($) {
    "use strict";

    /* ==============================================
    ANIMATION -->
    =============================================== */

    new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    }).init();

    /* ==============================================
    LIGHTBOX -->
    =============================================== */

    jQuery('a[data-gal]').each(function () {
        jQuery(this).attr('rel', jQuery(this).data('gal'));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animationSpeed: 'slow',
        theme: 'light_square',
        slideshow: true,
        overlay_gallery: true,
        social_tools: false,
        deeplinking: false
    });

    /* ==============================================
    SCROLL -->
    =============================================== */

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* ==============================================
    SCROLLSPY -->
    =============================================== */

    $('body').scrollspy({
        target: '.docs-sidebar'
    });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    })

    /* ==============================================
    VIDEO FIX -->
    =============================================== */

    $(document).ready(function () {
        // Target your .container, .wrapper, .post, etc.
        $(".media").fitVids();

        // Add Copy Button to Code Blocks (Robust for SyntaxHighlighter)
        function addCopyButtons() {
            // Handle plain pre blocks (not processed by SH)
            $('pre:not(:has(.copy-btn))').each(function () {
                var $pre = $(this);
                if ($pre.is(':hidden')) return; // Skip if hidden by SH

                var $button = $('<button class="copy-btn" aria-label="Copy code" title="Copy code"></button>');
                $pre.append($button);

                $button.click(function () {
                    var code = extractPreCode($pre);
                    copyToClipboard(code, $button);
                });
            });

            // Handle SyntaxHighlighter blocks
            $('.syntaxhighlighter:not(:has(.copy-btn))').each(function () {
                var $container = $(this);
                var $button = $('<button class="copy-btn" aria-label="Copy code" title="Copy code"></button>');
                $container.append($button);

                $button.click(function () {
                    var $code = $container.find('td.code');
                    var code = $code.text();
                    copyToClipboard(code, $button);
                });
            });
        }

        function extractPreCode($pre) {
            var $clone = $pre.clone();
            $clone.find('.copy-btn').remove();
            var $code = $clone.find('code');
            return $code.length ? $code.text() : $clone.text();
        }

        function copyToClipboard(text, $btn) {
            var $temp = $("<textarea>");
            $("body").append($temp);
            $temp.val(text).select();
            document.execCommand("copy");
            $temp.remove();

            var originalText = $btn.text();
            $btn.text('Copied!');
            setTimeout(function () {
                $btn.text(originalText);
            }, 2000);
        }

        // Remove any existing copy buttons and do not add new ones
        $('.copy-btn').remove();

        // Dark Mode Toggle Logic (moved from index.html)
        if (localStorage.getItem('darkMode') === 'true') {
            $('html').addClass('dark');
        }

        $('#mode').click(function () {
            $('html').toggleClass('dark');
            var isDark = $('html').hasClass('dark');
            localStorage.setItem('darkMode', isDark);
        });

        var $btn = $('#myBtn');
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $btn.stop(true, true).fadeIn(200, function () {
                    $(this).css('display', 'flex');
                });
            } else {
                $btn.stop(true, true).fadeOut(200);
            }
        });
        $btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 600);
        });
    });

})(jQuery);
