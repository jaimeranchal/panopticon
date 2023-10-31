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

      //build html
      const wrapper = $tw.utils.domMaker(
        'div',
        {
          document: this.document,
          class: 'pptc-todo',
          // children: [],
          // attributes: {},
          // style: {},
          // eventListeners: ""
        }
      )
    }
  }

})();