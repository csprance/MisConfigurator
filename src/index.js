/* @flow */
import * as React from 'react';
import * as misConfigurator from 'mis-configurator';

import hostingDefaults from './hostingDefaults';

type Props = {
	data: any,
};
type State = {};

class MisConfigurator extends React.Component<Props, State> {
	static defaultProps = {
		data: hostingDefaults,
	};
	state = {};

	render() {
		return <pre>{misConfigurator.createHostingCFGStringFromObject(this.props.data)}</pre>;
	}
}

export default MisConfigurator;
