(function() {
  /*jslint node: true, browser: true */
  /*global $tw: false */
  'use strict';

  if (!$tw.browser) return;

  const Widget = require('$:/core/modules/widgets/widget.js').widget;

  class TodoWidget extends Widget {
    constructor(parseTreeNode,options){
      super(parseTreeNode,options);
    }

    render(parent,nextSibling){
      this.parentDomNode = parent;
      this.computeAttributes();
      this.execute();

      //get attributes
      const id = this.getAttribute('id') || this.getVariable('currentTiddler');
      const target = this.getAttribute('field') || 'todo-data';
      //New todo input
      const inputTodo = $tw.utils.domMaker('input',{ document: this.document, class: 'pptc-input'});
      //build html
      this.domNode = $tw.utils.domMaker(
        'div',
        {
          document: this.document,
          class: 'pptc-todo',
          children: [inputTodo],
          // attributes: {},
          // style: {},
          // eventListeners: ""
        }
      )
      parent.insertBefore(this.domNode, nextSibling);
    }

    refresh(){
      // recover widget attributes (parameters) that have changed
      let changedAttributes = this.computeAttributes();
      // if any attribute is not undefined, it has changed
      if ( changedAttributes.id || changedAttributes.field ) {
        this.refreshSelf();
        return true;
      } else {
        return false;
      }
    }
  }

  exports.todo = TodoWidget;

})();