$(document).ready(function(){
  $('.lazyStyle').each(function(eleIndex,styleElement) {
    elementClasses = ($(styleElement).attr('class').split(' '))
    $.each(elementClasses, function (index, eleValue) {
      var words = eleValue.split('_')
      if (words[0] == 'lazy')
      {
        if (words[1] == 'round')
        {
          handleRoundEdges(styleElement, words)
        }
      }
    });
  })
});


function handleRoundEdges(styleElement, words)
{
  $(styleElement).css('-moz-border-radius', words[2]+'px')
}