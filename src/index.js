/* @flow */
import * as React from 'react';
import * as misConfigurator from 'mis-configurator';

type Props = {
	children: React.Node,
};
type State = {};

class MisConfigurator extends React.Component<Props, State> {
	static defaultProps = {
		children: 'This Is a Test',
	};
	state = {};

	render() {
		return <div>{this.props.children}</div>;
	}
}

export default MisConfigurator;
