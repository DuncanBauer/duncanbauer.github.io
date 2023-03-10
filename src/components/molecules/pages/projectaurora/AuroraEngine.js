import React from 'react';

import ContentSection from '../../ContentSection/ContentSection';

class AuroraEngine extends React.Component {
	render() {
		return (
			<div className="Body-content">
				<ContentSection style={this.props.style} />
			</div>
		)
	}
}

export default AuroraEngine;