'use strict'

const config = require('./../config')
const store = require('../store')

// create a new gemstone
const createGemstone = function (data) {
  console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/gemstones',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}
// update the gemstone
const updateGemstone = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/gemstones/' + data.gemstone.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const indexGemstone = function () {
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/gemstones',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
    // data: data
  })
}
// show the user only their gemstones
const showGemstone = function (data) {
  console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/gemstones/' + data.gemstone.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}
// delete the gemstone
const destroyGemstone = function (data) {
  console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/gemstones/' + data.gemstone.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  createGemstone,
  updateGemstone,
  indexGemstone,
  showGemstone,
  destroyGemstone
}
