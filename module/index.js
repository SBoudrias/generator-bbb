"use strict";
var util = require("util");
var path = require("path");
var _ = require("lodash");
var BBBGenerator = require("../base/bbb-generator");

module.exports = Generator;

function Generator(args, options, config) {
  BBBGenerator.apply(this, arguments);

  this.moduleName = args[0];
}

util.inherits(Generator, BBBGenerator);

Generator.prototype.module = function module() {

  if (!this.bbb) {
    this.log.writeln("You must init your project first");
    return;
  }
  if (!this.moduleName) {
    this.log.writeln(">> You must provide a name for your module");
    return;
  }

  this.copy("common/module.js", "app/modules/" + this.moduleName + ".js");
};

Generator.prototype.moduleTest = function moduleTest() {
  // TODO: Generate module test scaffhold
};
