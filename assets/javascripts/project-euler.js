jQuery(function($) {
  var main          = $('main'),
      name          = $('.name'),
      link          = $('.link'),
      codeContainer = $('.code-container'),
      problemResult = $('.result'),
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

    var url = 'http://projecteuler.net/problem=' + (self.index() + 1);
    link.text(url);
    link.attr('href', url);

    $.ajax({
      url: 'assets/javascripts/problems/' + self.data('name') + '.js',
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
