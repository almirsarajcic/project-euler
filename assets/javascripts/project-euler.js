jQuery(function($) {
  var main          = $('main'),
      name          = $('.name'),
      description   = $('.description'),
      link          = $('.link'),
      numberInput   = $('#number'),
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
    problemResult.text('');

    var index     = self.parent().index() + 1;
    var problem   = index + '-' + self.data('name');
    var filename  = problem + '.js';
    var scriptUrl = 'assets/javascripts/problems/' + filename;

    $.ajax({
      url: 'descriptions/' + problem + '.html',
      cache: true,
      success: function(response) {
        description.html(response);
      }
    });

    $.ajax({
      url: scriptUrl,
      dataType: 'script',
      cache: true,
      success: function(response) {
        numberInput.val(input);

        codeContainer.html('<pre class="brush: js">' + response + '</pre>');
        SyntaxHighlighter.highlight();
      }
    });

    var problemUrl = 'http://projecteuler.net/problem=' + index;
    link.text(problemUrl);
    link.attr('href', problemUrl);

    scriptLink.text(filename);
    scriptLink.attr('href', scriptUrl);

    main.slideDown();

    e.preventDefault();
  });

  $('form#calculate').on('submit', function() {
    input = numberInput.val();

    var result = calculate(input);
    problemResult.text(result);

    return false;
  });
});
