/*\
title: $:/jaimeranchal/panopticon/modules/test-macro.js
type: application/javascript
module-type: macro
Testing javascript macros
\*/
(function () {
  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  exports.name = "test-macro";

  exports.params = [
    {
      name: "namespace",
      default: "TEST", // 'default' property is optional
    },
  ];

  /* Run the macro. Make sure it accepts the parameters you have defined above. */
  exports.run = function (namespace) {
    const wiki = this.wiki;
    const fieldsource = `$:/config/${namespace}/Tasks/fields`;
    const stateTid = `$:/state/${namespace}/Issues`;
    let fields = JSON.parse(wiki.getTiddler(fieldsource).fields.text); 
    let filters = {
      tasks: `[!is[system]!has[draft.of]prefix[${namespace}/]tag[Task]]`,
    };
    let table = `<$macrocall $name="table-dynamic" filter="${filters.tasks}" fields={{${fieldsource}!!selected}} caption="" class="w-100" footerRows="0" stateTiddler="${stateTid}" editButton="yes" pagination="yes" emptyMessage="filter input is empty"/>`;

    try {
      return table;
    } catch (err) {
      console.error(err.stack);
      return "(ERROR: " + err.message + ") ";
    }
  };
})();
