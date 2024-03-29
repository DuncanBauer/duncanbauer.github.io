import React from 'react';

import ContentSection from '../../ContentSection/ContentSection'

class CPP extends React.Component {
	render() {
		return (
			<div className={this.props.style}>
				<ContentSection className={this.props.className}
								sectionName='Cpp Blog'
								explanation='The official blog page. From dsfghjbdkfgjhbsdfgkj all the way to dfgjkhdsfgkjdbhsfg you can find it all if you just google it' />
			</div>
		)
	}
}

export default CPP;