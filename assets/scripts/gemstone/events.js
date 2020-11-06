'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onCreate = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.create(data)
  // handle successful response
    .then(ui.onCreateSuccess)
    // handle failed response
    .catch(ui.onCreateFailure)
}
const onIndex = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.index(data)
  // handle successful response
    .then(ui.onIndexSuccess)
    // handle failed response
    .catch(ui.onIndexFailure)
}
const onShow = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.show(data)
  // handle successful response
    .then(ui.onShowSuccess)
    // handle failed response
    .catch(ui.onShowFailure)
}
const onUpgrade = function (event) {
  event.preventDefault()
  // get the form from event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.upgrade(data)
  // handle successful response
    .then(ui.onUpgradeSuccess)
    // handle failed response
    .catch(ui.onUpgradeFailure)
}
const onDestroy = function (event) {
  event.preventDefault()
  // send data in AJAX request to the api
  api.destroy()
  // handle successful response
    .then(ui.destroySuccess)
    // handle failed response
    .catch(ui.destroyFailure)
}

module.exports = {
  onCreate,
  onIndex,
  onShow,
  onUpgrade,
  onDestroy
}
