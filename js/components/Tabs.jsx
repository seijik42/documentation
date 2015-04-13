var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var TabsStore = require('../stores/TabsStore'),
	TabsActions = require('../actions/TabsActions');

var getOptionsFromChildren = R.map(R.path(['props', 'name']));

function getStateFromStore(options) {
	return { active: TabsStore.getActive(options)};
}

var Tabs = React.createClass({
	getInitialState: function() {
		var options = getOptionsFromChildren(this.props.children);
		return R.merge({ options: options }, getStateFromStore(options));
	},
	componentDidMount: function() {
		TabsStore.listen(this._onChange);
	},
	componentWillUnmount: function() {
		TabsStore.unlisten(this._onChange);
	},
	_onChange: function() {
		this.setState(R.merge(this.state, getStateFromStore(this.state.options)));
	},
	_toggleTab: function(i) {
		return function() {
			TabsActions.update(i, this.state.options);
			this.setState({ active: i });
		}.bind(this);
	},
	render: function() {
		var self = this;

		var optionButtons = R.mapIndexed(function(val , i) {
			var classes = {
				'btn btn-default': true,
				'btn-inactive': i != self.state.active
			};
			return (<a key={ i } className={ cx(classes) } onClick={ self._toggleTab(i) }>{ val }</a>);
		});

		return (
			<div className="tabs">
				<div className="row">
					{ this.props.children[this.state.active] }
				</div>
				<div className="row switcher">
					<div className="float-right">
						{ optionButtons(this.state.options) }
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Tabs;
