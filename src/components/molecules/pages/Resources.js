import React from 'react';

import ContentSection from '../ContentSection/ContentSection'

class Resources extends React.Component {
	render() {
		return (
			<div className={this.props.style}>
				<ContentSection className={this.props.className}
								sectionName='Resources'
								explanation='The official resources page. From dsfghjbdkfgjhbsdfgkj all the way to dfgjkhdsfgkjdbhsfg you can find it all if you just google it' />
			</div>
		)
	}
}

export default Resources;