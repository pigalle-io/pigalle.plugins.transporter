/**
 * This file is part of pigalle.transporters.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const LOG = require('../common/logger')('TransporterBase');
const {PigalleBaseClass} = require('@pigalle/core.base.class');

class TransporterBase extends PigalleBaseClass {

  constructor(...args) {
    let options = {};
    if ((args.length === 1) && (args[0] === 'object')) {
      options = args[0];
    }
    super(...args);
    this._servicesRegistry = options.servicesRegistry || (() => {
      throw new Error('Missing services registry');
    })();
    this.protocol = this.prototype.constructor.name.toLowerCase();
  }

  start() {
    throw new Error('start() is not implemented');
  }

}

module.exports = {};
module.exports.TransporterBase = TransporterBase;
