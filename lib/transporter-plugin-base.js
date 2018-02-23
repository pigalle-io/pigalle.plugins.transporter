/**
 * This file is part of pigalle.plugins.transporter
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module transporter-plugin-base
 * @description A base to create Pigalle plugins dedicated to transport.
 * @example
 *
 * const {TransporterPluginBase} = require('@pigalle/entities.transporter')
 *
 * // My TCP transporter.
 * class MyTcpTransporter extends TransporterEntity {
 *
 *   // Implements boot()
 *   boot() {
 *     // Start a TCP server...
 *   }
 * }
 *
 */

const {BootablePluginEntity} = require('@pigalle/entities.plugin.bootable')

/**
 * A bootable entity to take care of transport.
 *
 * @class
 * @public
 */
class TransporterPluginBase extends BootablePluginEntity {

}

module.exports = {}
module.exports.TransporterPluginBase = TransporterPluginBase
