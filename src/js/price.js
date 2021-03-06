$(function(){
        var includedWrap = $('.js-included');
        var extraWrap = $('.js-extra');

        var currentPrice = $('.js-price').find('input:checked');

        var currentText = currentPrice.siblings('label').text();
        var currentInfo = currentPrice.parent().data('price-info');
        var currentIncludedCont = currentInfo.included.split('|');
        var currentExtraCont = currentInfo.extra.split('|');
        var currentMulti = $.map(currentInfo.multiprice, function (value) {
            return [value];
        });
        var item = $('.price-block__item');

        includedWrap.html('');
        extraWrap.html('');
        item.html('');
        $('.price__title').text(currentText).addClass('active');
        item.each(function () {
            $(this).addClass('price-animate');
        });
        for (var i = 0; i < currentIncludedCont.length; i++) {
            includedWrap.append('<li class="active">' + currentIncludedCont[i] + '</li>');
        }
        for (var i = 0; i < currentExtraCont.length; i++) {
            extraWrap.append('<li class="active">' + currentExtraCont[i] + '</li>');
        }
        if(typeof(currentMulti[1]) != 'undefined'){
            for (var i = 0; i < currentMulti.length; i++) {
                var text = currentMulti[i].text;
                var price = currentMulti[i].price;
                var current = currentMulti[i].current;

                $(item[i]).append('<div class="price-block__title">' + text + '</div>');
                $(item[i]).append('<div class="price-block__value"><span>' + price + '</span></div>');
                if (current == 'y') {
                    $(item[i]).addClass('is-active');
                }
            }
        }
        // else{
        //   for (var i = 0; i < $('.price-block__item').length; i++) {
        //       $(item[i]).find('.price-block__title').text('');
        //       $(item[i]).find('.price-block__value span').text('');
        //   }
        // }


        $('.js-price label').click(function (e) {
          var fondy_price = $(this).parents('.js-price').data('fprice');
          var fondy_title = $(this).parents('.js-price').data('ftitle');
          var _id = $(this).parents('.js-price').data('id');
          $('#selected_id').val(_id);
          $('.filled').text(fondy_price);
          $('select.select-product option:selected').attr('data-id',_id).attr('value',fondy_price).text(fondy_title);
          $('div.select-product button>span').text(fondy_title);
          calculateFondySum();

            var target = $(e.currentTarget);

            var text = target.text();
            var info = target.parent().data('price-info');
            var includedCont = info.included.split('|');
            var extraCont = info.extra.split('|');
            var multi = $.map(info.multiprice, function (value) {
                return [value];
            });
            var item = $('.price-block__item');

            includedWrap.html('');
            extraWrap.html('');
            item.html('');
            $('.price__title').text(text).removeClass('active');
            item.each(function () {
                $(this).removeClass('price-animate is-active');
            });
            for (var i = 0; i < includedCont.length; i++) {
                includedWrap.append('<li>' + includedCont[i] + '</li>');
            }
            for (var i = 0; i < extraCont.length; i++) {
                extraWrap.append('<li>' + extraCont[i] + '</li>');
            }
            if(typeof(multi[1]) != 'undefined'){
                setTimeout(function () {
                    for (var i = 0; i < multi.length; i++) {
                        var text = multi[i].text;
                        var price = multi[i].price;
                        var current = multi[i].current;

                        $(item[i]).append('<div class="price-block__title">' + text + '</div>');
                        $(item[i]).append('<div class="price-block__value"><span>' + price + '</span></div>');
                        if (current == 'y') {
                            $(item[i]).addClass('is-active');
                        }
                    }
                }, 500);
            }
            // else{
            //   for (var i = 0; i < $('.price-block__item').length; i++) {
            //       $(item[i]).find('.price-block__title').text('');
            //       $(item[i]).find('.price-block__value span').text('');
            //   }
            // }

            //animations
            setTimeout(function () {
                $('.price__title').addClass('active');
            }, 200);
            includedWrap.find('li').each(function (i) {
                var self = $(this);
                setTimeout(function () {
                    self.addClass('active');
                }, i * 100);
            });
            extraWrap.find('li').each(function (i) {
                var self = $(this);
                setTimeout(function () {
                    self.addClass('active');
                }, i * 100);
            });
            item.each(function (i) {
                var self = $(this);
                setTimeout(function () {
                    self.addClass('price-animate');
                }, 500);
            });
        });

})();
