'use strict'

const config = require('./../config')
const store = require('../store')

// create a new gemstone
const createGemstone = function (data) {
  return $.ajax({
    url: config.apiUrl + '/create',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}
// update the gemstone
const updateGemstone = function (data) {
  return $.ajax({
    url: config.apiUrl + '/update',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const indexGemstone = function (data) {
  return $.ajax({
    url: config.apiUrl + '/index',
    method: 'GET',
    data: data
  })
}
// show the user only their gemstones
const showGemstone = function (data) {
  return $.ajax({
    url: config.apiUrl + '/show',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}
// delete the gemstone
const destroyGemstone = function () {
  return $.ajax({
    url: config.apiUrl + '/destroy',
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
