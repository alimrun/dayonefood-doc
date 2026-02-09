(function($) {
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

    jQuery('a[data-gal]').each(function() {
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

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
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

    $(document).ready(function() {
        // Target your .container, .wrapper, .post, etc.
        $(".media").fitVids();

        // Add Copy Button to Code Blocks (Robust for SyntaxHighlighter)
        function addCopyButtons() {
            // Handle plain pre blocks (not processed by SH)
            $('pre:not(:has(.copy-btn))').each(function() {
                var $pre = $(this);
                if ($pre.is(':hidden')) return; // Skip if hidden by SH
                
                var $button = $('<button class="copy-btn">Copy</button>');
                $pre.append($button);
                
                $button.click(function() {
                    var code = $pre.text().replace('Copy', '');
                    copyToClipboard(code, $button);
                });
            });

            // Handle SyntaxHighlighter blocks
            $('.syntaxhighlighter:not(:has(.copy-btn))').each(function() {
                var $container = $(this);
                var $button = $('<button class="copy-btn">Copy</button>');
                $container.append($button);
                
                $button.click(function() {
                    var $code = $container.find('td.code');
                    var code = $code.text();
                    copyToClipboard(code, $button);
                });
            });
        }

        function copyToClipboard(text, $btn) {
            var $temp = $("<textarea>");
            $("body").append($temp);
            $temp.val(text).select();
            document.execCommand("copy");
            $temp.remove();

            var originalText = $btn.text();
            $btn.text('Copied!');
            setTimeout(function() {
                $btn.text(originalText);
            }, 2000);
        }

        // Run initially and check again for async SyntaxHighlighter
        addCopyButtons();
        setTimeout(addCopyButtons, 1000);
        setTimeout(addCopyButtons, 3000);

        // Back to Top Button Logic
        var $mybutton = $('#myBtn');
        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $mybutton.css('display', 'flex');
            } else {
                $mybutton.hide();
            }
        });

        $mybutton.click(function() {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

        // Dark Mode Toggle Logic (moved from index.html)
        $('#mode').click(function() {
            $('html').toggleClass('dark');
        });
    });

})(jQuery);
