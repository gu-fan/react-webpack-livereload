var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var _state        = {};
var _EVENT_CHANGE = 'change';
var _fieldNames   = [];

module.exports = assign({}, EventEmitter.prototype, {
  get: function(name) {
    return name ? _state[name] : _state;
  },
  log: function(){
    console.log(_state)
    console.log(_fieldNames)
  },
  set: function(name, value) {
    _state[name] = value;
    var arg = {};
    arg[name] = value;
    this.emitChange(arg);
    if (_fieldNames.indexOf(name) + 1) {
      this.emitChangeByField(name, arg[name]);
    }
  },
  addChangeListener: function(callback) {
    this.on(_EVENT_CHANGE, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(_EVENT_CHANGE, callback);
  },
  emitChange: function(arg) {
    this.emit(_EVENT_CHANGE, arg);
  },
  addFieldChangeListener: function(fieldName, callback) {
    var eventName = _EVENT_CHANGE + '_' + fieldName;
    _fieldNames.push(fieldName);
    this.on(eventName, callback);
  },
  removeFieldChangeListener: function(fieldName, callback) {
    var eventName = _EVENT_CHANGE + '_' + fieldName;
    this.removeListener(eventName, callback);
  },
  emitChangeByField: function(fieldName, arg) {
    var eventName = _EVENT_CHANGE + '_' + fieldName;
    this.emit(eventName, arg);
  }
});
