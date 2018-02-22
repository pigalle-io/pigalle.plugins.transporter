/**
 * This file is part of pigalle.transporters.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {TransporterBase} = require('../lib/transporter-base')

describe('Class {TransporterBase}', () => {
  it('should be a function', () => {
    (TransporterBase).should.be.a.Function()
  })
})

describe('Create a new instance of {TransporterBase}', () => {
  it('should be a function', () => {
    (new TransporterBase()).should.be.an.Object()
  })
})
