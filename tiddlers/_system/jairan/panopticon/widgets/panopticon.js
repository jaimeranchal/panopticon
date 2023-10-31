/*\
Content generator widget
* @param {string} template id as it is in Data/Templates
* @param {object} params customization options object
\*/

(function () {

  const Widget = require("$:/core/modules/widgets/widget.js").widget;

  class PanopticonWidget extends Widget {
    constructor(parseTreeNode,options) {
      super(parseTreeNode,options);
      // initialize template class
      let attribute = this.getAttribute('name');
    }

    /** Add eventListeners */
    addListener(domNode){
      // Add an input event handler
      $tw.utils.addEventListeners(
        domNode,
        [
          {name: "focus", handlerObject: this, handlerMethod: "handleFocusEvent"},
          {name: "input", handlerObject: this, handlerMethod: "handleInputEvent"}
        ]
      );
    }

    /**
     * Render the widget into the DOM 
     */
    render(parent,nextSibling) {
      if (!$tw.browser) return;  
      this.parentDomNode = parent;
      this.nextSibling = nextSibling;
      this.computeAttributes();
      this.template.buildTemplate(parent,nextSibling);
      this.execute();

      // Build base element
      this.domNode = $tw.utils.domMaker(
        'div',
        { document: this.document, class:'some-class'}
      )
      // Insert the element into the DOM
      parent.insertBefore(this.domNode,nextSibling);
    }
  }

  exports.new = PanopticonWidget;

})();
