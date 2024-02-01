var text = $('.about__circle-left-text').html();
var textLen = text.length;

function wrapLettersInSpan(text) {
  var arr = text.split('');
  for (var i = 0; i < textLen; i++) {
    arr[i] = "<span class='letter'>" + arr[i] + "</span>";
  }
  $('.about__circle-left-text').html(arr.join(''));
}

function addTransformCss() {
  var transformStart = 70;
  var transformStep = 190 / (textLen - 50);

  $('.letter').each(function(i, elem) {
    $(elem).css({transform: 'rotate(' + transformStart + 'deg)'});
    transformStart += transformStep;
  });
}


wrapLettersInSpan(text);
addTransformCss();