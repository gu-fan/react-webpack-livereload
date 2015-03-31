var React = require('react')
var StoreMixin = require('../lib/StoreMixin')

module.exports = React.createClass({
    mixins: [StoreMixin],
    getInitialState: function(){
        return {
            name: '',
            status: ''
        }
    },
    activitStateChange: function() {
      this.setState(this.getActivitState('info'));
    },
    render: function(){
        return <div>
                    <span>Info Box2</span>
                    <p>
                        <label htmlFor="name">name:</label>
                        <span id="name">{this.state.name}</span>
                    </p>
                    <p>
                        <label htmlFor="status">status:</label>
                        <span>{this.state.status}</span>
                    </p>
               </div>
    }
})
