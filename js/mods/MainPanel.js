var React = require('react')
var ControlBox = require('./ControlBox')
var InfoBox = require('./InfoBox')


module.exports = React.createClass({
    render: function(){
        return (<div>
                    <ControlBox />
                    <InfoBox />
               </div>)
    }
})

