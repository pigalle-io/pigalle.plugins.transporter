/**
 * This file is part of pigalle.transporters.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const {PigalleBaseClass} = require('@pigalle/core.base.class');
const {NotImplementedError} = require('@pigalle/core.errors.notimplemented');


/**
 * Base class for transporters usable with the Pigalle framework.
 *
 * @class
 * @public
 */
class TransporterBase extends PigalleBaseClass {

  /**
   * Create a new instance of {TransporterBase}.
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
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


  /**
   * Start the transporter.
   *
   * @throws {NotImplementedError}.
   * @public
   */
  start() {
    throw new NotImplementedError('start() is not implemented');
  }

  route() {

  }

}

module.exports = {};
module.exports.TransporterBase = TransporterBase;
