var React = require('react')

var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar')
var Button = require('react-bootstrap/lib/Button')
var Input = require('react-bootstrap/lib/Input')
var mui = require('material-ui'),
  RaisedButton = mui.RaisedButton;


var StoreMixin = require('../lib/StoreMixin')

module.exports =  React.createClass({
    mixins: [StoreMixin],
    handleClick: function(){
        console.log('a')
        this.setActivitState('info', {
            name: this.refs.name.getDOMNode().value,
            status: this.refs.status.getDOMNode().value,
        })
    },
    render: function(){
        return <div>
                    <span>Control Box</span>
    <RaisedButton label="Default" />
    <Input type='select' label='Select' placeholder='select'>
      <option value='select'>select</option>
      <option value='other'>...</option>
    </Input>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /><span className="checkbox-material"><span className="check"></span></span> Notifications
                  </label>
                </div>
<div className="select">
  <input type="text" readonly placeholder="This is a placeholder" />
  <ul>
    <li value="foobar" tabindex="0">My foobar...</li>
    <li value="great" selected className="selected" tabindex="0">...is great!</li>
  </ul>
</div>
 <select multiple className="select form-control floating-label" placeholder="This is a placeholder" data-dynamic-opts="true">
      <option></option>
    </select>

    <select className="select" placeholder="This is a placeholder">
      <option></option>
      <option>Foobar</option>
      <option value="hi..." selected>Is great</option>
    </select>

    <select id="multi" multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <Input type='password' label='Password' />
    <Input type='file' label='File' help='[Optional] Block level help text' />
    <Input type='checkbox' label='Checkbox' checked readOnly />
    <Input type='radio' label='Radio' checked readOnly />
    
    <Input type="text" ref="name" placeholder="name" />
    <Input type="text" ref="status" placeholder="Status" />
    <Input type='textarea' label='Text Area' placeholder='textarea' />

    <ButtonToolbar>
      <Button bsStyle='primary' bsSize='normal' onClick={this.handleClick}>Change</Button>
      <Button bsSize='small'>Cancel</Button>
    </ButtonToolbar>
       </div>
    }
})
