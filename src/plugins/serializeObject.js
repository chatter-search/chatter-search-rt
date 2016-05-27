/**
 * @module plugins/serializeObject
 * @description Serialize object Jquery form extention
 */

import _ from 'lodash'
import $ from 'jquery'

$.fn.serializeObject = function () {
  var sdata = $(this).serializeArray()
  var data = {}

  _.each(sdata, function (el) {
    data[el.name] = el.value
  })

  return data
}
