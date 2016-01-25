var React = require('react');
var lodash = require('lodash');

var LibraryPickerItem = require('./LibraryPickerItem');
var config = require('../config');

var LibraryPicker = React.createClass({
  propTypes: {
    enabledLibraries: React.PropTypes.array.isRequired,
    onLibraryToggled: React.PropTypes.func.isRequired,
  },

  _isLibraryEnabled: function(libraryKey) {
    return this.props.enabledLibraries.indexOf(libraryKey) !== -1;
  },

  render: function() {
    var libraries = lodash.map(config.libraries, function(library, key) {
      return (
        <LibraryPickerItem
          key={key}
          library={library}
          enabled={this._isLibraryEnabled(key)}
          onLibraryToggled={lodash.partial(this.props.onLibraryToggled, key)}
        />
      );
    }, this);

    return <ul className="toolbar-menu">{libraries}</ul>;
  },
});

module.exports = LibraryPicker;