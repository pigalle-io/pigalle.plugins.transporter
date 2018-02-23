/**
 * This file is part of pigalle.plugins.transporter
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {TransporterPluginBase} = require('../lib/transporter-plugin-base')

describe('Class {TransporterPluginBase}', () => {
  it('should be a function', () => {
    (TransporterPluginBase).should.be.a.Function()
  })
})

describe('Create a instance of {TransporterPluginBase} using <new> keyword', () => {
  it('should be an object', () => {
    (new TransporterPluginBase()).should.be.an.Object()
  })

  it('should be an instance of {TransporterPluginBase}', () => {
    (new TransporterPluginBase()).should.be.an.instanceOf(TransporterPluginBase)
  })
})
