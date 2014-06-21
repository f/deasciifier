var fs = require("fs");
var _ = require("underscore");
var path = require("path");

var _file = path.join(
    __dirname,
    "workflow",
    "Convert\ Text\ to\ Turkish.workflow",
    "Contents",
    "document.wflow"
    );

var workflow = fs.readFileSync(path.join(
    __dirname,
    "template",
    "document.wflow"
    )).toString();

var workflowTemplate = _.template(workflow, {
  command: [
    process.execPath,
    path.join(__dirname, 'bin', 'deasciify')
  ].join(" ")
});

fs.writeFileSync(_file, workflowTemplate);

