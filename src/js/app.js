var React = require('react')

var Router = require('react-router')

var store = require('./lib/store')
var routes = require('./routes')

store.addChangeListener(function(e){
    console.log('change:' )
    console.log(e)
})
store.addFieldChangeListener('bbb', function(e){
    console.log('change by name:' + e)
    console.log(e)
})

var _ = require('./lib/SimpleSelector')

// require('../css/main.scss')

_.ready(function(){
    var $root = $('#react-root')[0]
    Router.run(routes, function (Handler) {
      React.render(<Handler/>, $root);
    });
    $.material.init()
    $.material.ripples()
    $.material.input()
    $.material.checkbox()
    $.material.radio()
    $(".select").dropdown({ "autoinit" : ".select" });
})

