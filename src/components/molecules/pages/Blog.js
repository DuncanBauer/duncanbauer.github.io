import React from 'react';

class Blog extends React.Component {
	render() {
		return (
			<div className={this.props.style}>
				<h2>Blog Page</h2>
				<main>
					<p>This section contains information about...</p>
				</main>
			</div>
		)
	}
}

export default Blog;