var $ = document.querySelector.bind(document)

var readyRE = /complete|loaded|interactive/

$.ready = function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
}

module.exports = $

