jQuery(function($) {
  var main          = $('main'),
      name          = $('.name'),
      link          = $('.link'),
      codeContainer = $('.code-container'),
      problemResult = $('.result'),
      scriptLink    = $('.script'),
      showCode      = true;

  $('button.toggle-code').on('click', function(e) {
    var self = $(this),
        text = '';

    if (showCode) {
      codeContainer.slideDown();
      text     = 'Hide';
      showCode = false;
    } else {
      codeContainer.slideUp();
      text     = 'Show';
      showCode = true;
    }

    text += ' code';
    self.text(text);

    e.preventDefault();
  });

  $('aside.problems a').on('click', function(e) {
    var self = $(this);

    name.text(self.text());

    var index = self.parent().index() + 1;

    var problemUrl = 'http://projecteuler.net/problem=' + index;
    link.text(problemUrl);
    link.attr('href', problemUrl);

    var filename  = index + '-' + self.data('name') + '.js';
    var scriptUrl = 'assets/javascripts/problems/' + filename;

    scriptLink.text(filename);
    scriptLink.attr('href', scriptUrl);

    $.ajax({
      url: scriptUrl,
      dataType: 'script',
      cache: true,
      success: function(response) {
        problemResult.text(window.result);
        codeContainer.html('<pre class="brush: js">' + response + '</pre>');
        SyntaxHighlighter.highlight();
      }
    });

    main.slideDown();

    e.preventDefault();
  });
});
