import React from 'react';

import ContentSection from '../../ContentSection/ContentSection';

class MapleClient extends React.Component {
	render() {
		return (
			<div className="Body-content">
				<h1>Aurora Maple Client</h1>
				<ContentSection className={this.props.className}
								sectionName='Introduction'
								explanation='A simple hello world description whose width can definitely, 100%, totally fill 100% of the screens width, right? I need to add more text to actually test that though' />

				<div id="gettingStarted">
					<ContentSection className={this.props.className}
									sectionName='Getting Started'
									explanation='Here you can find our distribution binaries' />
				</div>

				<div id="releases">
					<ContentSection className={this.props.className}
									sectionName='Releases'
									explanation='Here you can find our distribution binaries' />
				</div>
					
				<div id="changelog">
					<ContentSection className={this.props.className}
									sectionName='Changelog'
									explanation='A log of all changes. Special considerations will be made for breaking changes' />
				</div>

				<div id="resources">
					<ContentSection className={this.props.className}
									sectionName='Resources'
									explanation='tools used to build this biatch' />
				</div>

				<div id="faq">
					<ContentSection className={this.props.className}
									sectionName='FAQ'
									explanation='a buncha questions' />
				</div>

				<div id="support">
					<ContentSection className={this.props.className}
									sectionName='Support'
									explanation='for questions not in faq' />
				</div>
			</div>
		)
	}
}

export default MapleClient;