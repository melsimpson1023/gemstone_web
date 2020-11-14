'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onCreateJewelry = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.createJewelry(data)
  // handle successful response
    .then(ui.onCreateSuccess)
    // handle failed response
    .catch(ui.onCreateFailure)
}
const onIndexJewelry = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.indexJewelry(data)
  // handle successful response
    .then(ui.onIndexSuccess)
    // handle failed response
    .catch(ui.onIndexFailure)
}
const onShowJewelry = function (event) {
  console.log('This is event ', event)
  event.preventDefault()
  api.indexJewelry()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}
const onUpdateJewelry = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.updateJewelry(data)
  // handle successful response
    .then(ui.onUpgradeSuccess)
    // handle failed response
    .catch(ui.onUpgradeFailure)
}
const onDestroyJewelry = function (event) {
  console.log('event is ', event)
  event.preventDefault()
  const form = event.target
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.destroyJewelry(data)
  // handle successful response
    .then(ui.onDestroySuccess)
    // handle failed response
    .catch(ui.onDestroyFailure)
}

module.exports = {
  onCreateJewelry,
  onIndexJewelry,
  onShowJewelry,
  onUpdateJewelry,
  onDestroyJewelry
}
