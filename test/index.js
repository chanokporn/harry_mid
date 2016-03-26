/* global describe, it */
require('mocha-generators').install()

var Nightmare = require('nightmare')
var chai = require('chai')
var should = chai.should()

describe('nightmareJs and mocha and chai', function () {
  var nightmare = Nightmare()

  it('ซื้อเล่ม 1 จำนวน 3 เล่ม, ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 20', function * () {
    var case1 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b1')
      .click('#b1')
      .click('#b1')

      .click('#b2')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case1.should.equal('20')
  })
  it('ซื้อเล่ม 2 จำนวน 3 เล่ม, ซื้อเล่ม 3 จำนวน 3 เล่ม ส่วนลดต้องเท่ากับ 60', function * () {
    var case2 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b2')
      .click('#b2')
      .click('#b2')

      .click('#b3')
      .click('#b3')
      .click('#b3')

      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case2.should.equal('60')
  })
  it('ซื้อเล่ม 3 จำนวน 4 เล่ม, ซื้อเล่ม 4 จำนวน 4 เล่ม, ซื้อเล่ม 5 จำนวน 5 เล่ม  ส่วนลดต้องเท่ากับ 240', function * () {
    var case3 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b3')
      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b4')
      .click('#b4')
      .click('#b4')
      .click('#b4')

      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .click('#b5')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case3.should.equal('240')
  })
  it('ซื้อเล่ม 1 จำนวน 2 เล่ม, ซื้อเล่ม 3 จำนวน 3 เล่ม, ซื้อเล่ม 6 จำนวน 3 เล่ม, ซื้อเล่ม 7 จำนวน 5 เล่ม ส่วนลดต้องเท่ากับ 300', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b1')
      .click('#b1')

      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b6')
      .click('#b6')
      .click('#b6')

      .click('#b7')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .click('#b7')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case4.should.equal('300')
  })
  it('ซื้อเล่ม 4 จำนวน 2 เล่ม, ซื้อเล่ม 5 จำนวน 2 เล่ม, ซื้อเล่ม 6 จำนวน 3 เล่ม, ซื้อเล่ม 7 จำนวน 3 เล่ม , ซื้อเล่ม 1 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 340', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b4')
      .click('#b4')

      .click('#b5')
      .click('#b5')

      .click('#b6')
      .click('#b6')
      .click('#b6')

      .click('#b7')
      .click('#b7')
      .click('#b7')

      .click('#b1')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case4.should.equal('340')
  })
  it('ซื้อเล่ม 7 จำนวน 3 เล่ม, ซื้อเล่ม 5 จำนวน 2 เล่ม, ซื้อเล่ม 1 จำนวน 4 เล่ม, ซื้อเล่ม 4 จำนวน 1 เล่ม , ซื้อเล่ม 3 จำนวน 5 เล่ม , ซื้อเล่ม 2 จำนวน 1 เล่ม ส่วนลดต้องเท่ากับ 500', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b7')
      .click('#b7')
      .click('#b7')

      .click('#b5')
      .click('#b5')

      .click('#b1')
      .click('#b1')
      .click('#b1')
      .click('#b1')

      .click('#b4')

      .click('#b3')
      .click('#b3')
      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b2')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case4.should.equal('500')
  })
  it('ซื้อเล่ม 6 จำนวน 5 เล่ม, ซื้อเล่ม 7 จำนวน 1 เล่ม, ซื้อเล่ม 4 จำนวน 4 เล่ม, ซื้อเล่ม 3 จำนวน 3 เล่ม , ซื้อเล่ม 2 จำนวน 2 เล่ม , ซื้อเล่ม 1 จำนวน 1 เล่ม , ซื้อเล่ม 5 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 700', function * () {
    var case4 = yield nightmare
      .goto('http://localhost:5000')

      .click('#b6')
      .click('#b6')
      .click('#b6')
      .click('#b6')
      .click('#b6')

      .click('#b7')

      .click('#b4')
      .click('#b4')
      .click('#b4')
      .click('#b4')

      .click('#b3')
      .click('#b3')
      .click('#b3')

      .click('#b2')
      .click('#b2')

      .click('#b1')

      .click('#b5')
      .click('#b5')
      .evaluate(function () {
        this.price = document.querySelector('#discountTotal').innerHTML
        return this.price
      })
    case4.should.equal('700')
  })
})

should
