var React = require('react')
var ControlBox = require('./ControlBox')
var InfoBox = require('./InfoBox')

var store = require('../lib/store')

var Alert = require('react-bootstrap/lib/Alert');

module.exports = React.createClass({
    render: function(){
        return (<div className='Image'>
                    <h1> Hello </h1>
                    <Alert bsStyle='warning'>
                        Give a check
                    </Alert>
                    <ControlBox />
                    <InfoBox />
               </div>)
    }
})
