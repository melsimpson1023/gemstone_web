'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')
const gemstoneEvents = require('./gemstone/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#add-gemstone-form').on('submit', gemstoneEvents.onCreateGemstone)
  $('#update-gemstone-form').on('submit', gemstoneEvents.onUpdateGemstone)
  $('#destroy-gemstone-form').on('submit', gemstoneEvents.onDestroyGemstone)
  $('#index-gemstone-form').on('submit', gemstoneEvents.onIndexGemstone)
  $('#filter-index').on('click', gemstoneEvents.onShowGemstone)
  $('#add-jewelry-form').on('submit', jewelryEvents.onCreateJewelry)
  $('#update-jewelry-form').on('submit', jewelryEvents.onUpdateJewelry)
  $('#destroy-jewelry-form').on('submit', jewelryEvents.onDestroyJewelry)
  $('#index-jewelry-form').on('submit', jewelryEvents.onIndexJewelry)
  $('#jewelry-filter-index').on('click', jewelryEvents.onShowjewelry)
  $('#change-password-form').hide()
  $('#add-gemstone-form').hide()
  $('#sign-out-form').hide()
  $('#show-gemstone-form').hide()
  $('#index-gemstone-form').hide()
  $('#destroy-gemstone-form').hide()
  $('#update-gemstone-form').hide()
  $('#filter-index').hide()
  $('#add-jewelry-form').hide()
  $('#update-jewelry-form').hide()
  $('#destroy-jewelry-form').hide()
  $('#index-jewelry-form').hide()
  $('#jewelry-filter-index').hide()
})
