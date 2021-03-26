(function($) {
    $(function() {
      
      $('.InvestmentLiterature').on('click', function() {
        $('.InvestmentLiterature-content').removeClass('d-none').addClass('d-flex');
        $('.RelevantArticles-content').removeClass('d-flex').addClass('d-none');
        $('.Videos-content').removeClass('d-flex').addClass('d-none');
        $('.Podcasts-content').removeClass('d-flex').addClass('d-none');

        $('.DigDeeper__list-top').removeClass('DigDeeper__list-top25').removeClass('DigDeeper__list-top50').removeClass('DigDeeper__list-top75');
        $('.DigDeeper__list-top').addClass('.DigDeeper__top-list-option');
       
      });

      $('.RelevantArticles').on('click', function() {
        $('.InvestmentLiterature-content').removeClass('d-flex').addClass('d-none');
        $('.RelevantArticles-content').removeClass('d-none').addClass('d-flex');
        $('.Videos-content').removeClass('d-flex').addClass('d-none');
        $('.Podcasts-content').removeClass('d-flex').addClass('d-none');
        $('.DigDeeper__list-top').removeClass('DigDeeper__list-top25').removeClass('DigDeeper__list-top50').removeClass('DigDeeper__list-top75');
        $('.DigDeeper__list-top').addClass('DigDeeper__list-top25');
      });

      $('.Videos').on('click', function() {
        $('.InvestmentLiterature-content').removeClass('d-flex').addClass('d-none');
        $('.RelevantArticles-content').removeClass('d-flex').addClass('d-none');
        $('.Videos-content').removeClass('d-none').addClass('d-flex');
        $('.Podcasts-content').removeClass('d-flex').addClass('d-none');
        $('.DigDeeper__list-top').removeClass('DigDeeper__list-top25').removeClass('DigDeeper__list-top50').removeClass('DigDeeper__list-top75');
        $('.DigDeeper__top-list-option').addClass('DigDeeper__list-top50');
      });

      $('.Podcasts').on('click', function() {
        $('.InvestmentLiterature-content').removeClass('d-flex').addClass('d-none');
        $('.RelevantArticles-content').removeClass('d-flex').addClass('d-none');
        $('.Videos-content').removeClass('d-flex').addClass('d-none');
        $('.Podcasts-content').removeClass('d-none').addClass('d-flex');
        $('.DigDeeper__list-top').removeClass('DigDeeper__list-top25').removeClass('DigDeeper__list-top50').removeClass('DigDeeper__list-top75');
        $('.DigDeeper__top-list-option').addClass('DigDeeper__list-top75');
      });
      
    });
    })(jQuery);