jQuery(function($) {
  var main          = $('main'),
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
