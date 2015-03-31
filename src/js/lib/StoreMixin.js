var store         = require('./store.js');
var blankFunction = function() {};

module.exports = {
  componentWillMount: function() {
    store.addChangeListener(this.activitStateChange || blankFunction);
  },
  componentWillUnmount: function() {
    store.removeChangeListener(this.activitStateChange || blankFunction);
  },
  setActivitState: function(name, value) {
    store.set(name, value);
  },
  getActivitState: function(name) {
    return store.get(name);
  }
};
