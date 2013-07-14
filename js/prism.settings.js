/**
 * @file
 * Basic prism settings.
 */

(function ($) {
  Drupal.behaviors.prism = {
    attach: function(context, settings) {
      var current = localStorage.getItem('theme');
      // Check if an ajax call has been made.
      $(document).ajaxComplete(function() {
        // Make sure we highlight any newly added content.
        // @todo, target specific content wrapper(s)?
        Prism.highlightAll();
      });
    }
  };

  /**
   * Set the Prism theme.
   */
  function setTheme(id) {
    localStorage.setItem('theme', id);
  }

})(jQuery);
