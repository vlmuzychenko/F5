$(function(){
  var includedWrap = $('.js-included');
  var extraWrap = $('.js-extra');

  var currentPrice = $('.js-price').find('input:checked');

  var currentText = currentPrice.siblings('label').text();
  var currentInfo = currentPrice.parent().data('price-info');
  var currentIncludedCont = currentInfo.included.split('|');
  var currentExtraCont = currentInfo.extra.split('|');
  var currentMulti = $.map(currentInfo.multiprice, function(value){
    return [value];
  });
  var item = $('.price-block__item');

  includedWrap.html('');
  extraWrap.html('');
  $('.price__title').text(currentText)
                    .addClass('active');
  item.each(function(){
    $(this).addClass('price-animate');
  });
  for(var i = 0; i < currentIncludedCont.length; i++){
    includedWrap.append('<li class="active">'+currentIncludedCont[i]+'</li>');
  }
  for(var i = 0; i < currentExtraCont.length; i++){
    extraWrap.append('<li class="active">'+currentExtraCont[i]+'</li>');
  }
  for(var i = 0; i < $('.price-block__item').length; i++){
    var text = currentMulti[i].text;
    var price = currentMulti[i].price;
    var current = currentMulti[i].current;

    $(item[i]).find('.price-block__title').text(text);
    $(item[i]).find('.price-block__value span').text(price);
    if(current == 'y'){
      $(item[i]).addClass('is-active');
    }
  }

  $('.js-price label').click(function(e){

    var target = $(e.currentTarget);

    var text = target.text();
    var info = target.parent().data('price-info');
    var includedCont = info.included.split('|');
    var extraCont = info.extra.split('|');
    var multi = $.map(info.multiprice, function(value){
      return [value];
    });
    var item = $('.price-block__item');

    includedWrap.html('');
    extraWrap.html('');
    $('.price__title').text(text)
                      .removeClass('active');
    item.each(function(){
      $(this).removeClass('price-animate is-active');
    });
    for(var i = 0; i < includedCont.length; i++){
      includedWrap.append('<li>'+includedCont[i]+'</li>');
    }
    for(var i = 0; i < extraCont.length; i++){
      extraWrap.append('<li>'+extraCont[i]+'</li>');
    }
    setTimeout(function(){
      for(var i = 0; i < $('.price-block__item').length; i++){
        var text = multi[i].text;
        var price = multi[i].price;
        var current = multi[i].current;

        $(item[i]).find('.price-block__title').text(text);
        $(item[i]).find('.price-block__value span').text(price);
        if(current == 'y'){
          $(item[i]).addClass('is-active');
        }
      }
    }, 500);

    //animations
    setTimeout(function(){
      $('.price__title').addClass('active');
    }, 200);
    includedWrap.find('li').each(function(i){
      var self = $(this);
      setTimeout(function(){
        self.addClass('active');
      }, i*100);
    });
    extraWrap.find('li').each(function(i){
      var self = $(this);
      setTimeout(function(){
        self.addClass('active');
      }, i*100);
    });
    item.each(function(i){
      var self = $(this);
      setTimeout(function(){
        self.addClass('price-animate');
      }, 500);
    });

  })

})();
