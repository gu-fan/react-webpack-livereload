var React = require('react')
var MainPanel = require('./mods/MainPanel')

var $ = require('./lib/SimpleSelector')

console.log(1)
console.log(3)

$.ready(function(){
    var $root = $('#react-root')
    React.render(<MainPanel />, $root)
})
