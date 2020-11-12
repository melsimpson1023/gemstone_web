'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onCreateGemstone = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.createGemstone(data)
  // handle successful response
    .then(ui.onCreateSuccess)
    // handle failed response
    .catch(ui.onCreateFailure)
}
const onIndexGemstone = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.indexGemstone(data)
  // handle successful response
    .then(ui.onIndexSuccess)
    // handle failed response
    .catch(ui.onIndexFailure)
}
const onShowGemstone = function (event) {
  console.log('This is event ', event)
  event.preventDefault()
  api.indexGemstone()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}
const onUpdateGemstone = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.updateGemstone(data)
  // handle successful response
    .then(ui.onUpgradeSuccess)
    // handle failed response
    .catch(ui.onUpgradeFailure)
}
const onDestroyGemstone = function (event) {
  console.log('event is ', event)
  event.preventDefault()
  const form = event.target
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.destroyGemstone(data)
  // handle successful response
    .then(ui.onDestroySuccess)
    // handle failed response
    .catch(ui.onDestroyFailure)
}

module.exports = {
  onCreateGemstone,
  onIndexGemstone,
  onShowGemstone,
  onUpdateGemstone,
  onDestroyGemstone
}
