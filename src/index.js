/* @flow */
import * as React from 'react';

type Props = {
	children: React.Node | string,
};

const MisConfigurator = (props: Props): React.Element<*> => {
	return <div>{props.children}</div>;
};

MisConfigurator.defaultProps = {
	children: 'Test',
};

export default MisConfigurator;
