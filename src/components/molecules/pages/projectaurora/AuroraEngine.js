import React from 'react';

import ContentSection from '../../ContentSection/ContentSection';

class AuroraEngine extends React.Component {
	render() {
		const documentationExamples = [
			{
				language: 'cpp',
				code: `#include <iostream>

int main(int argc, char** argv)
{
	std::cout << "Hello world\\n";
	return 0;
}`,
				showLineNumbers: 'true',
				startingLineNumber: '',
				wrapLines: 'true'
			},
			{
				language: 'python',
				code: `print("Hello world")`,
				showLineNumbers: 'true',
				startingLineNumber: '',
				wrapLines: 'true'
			}
		];

		
		const tutorialExamples = [
			{
				language: 'cpp',
				code: `#include <iostream>

int main(int argc, char** argv)
{
	std::cout << "Hello world\\n";
	return 0;
}`,
				showLineNumbers: 'true',
				startingLineNumber: '',
				wrapLines: 'true'
			},
			{
				language: 'python',
				code: `print("Hello world")`,
				showLineNumbers: 'true',
				startingLineNumber: '',
				wrapLines: 'true'
			}
		];

		return (
			<div className="Body-content">
				<ContentSection className={this.props.className}
								sectionName='Introduction'
								explanation='A simple hello world description whose width can definitely, 100%, totally fill 100% of the screens width, right? I need to add more text to actually test that though' />
				
				<ContentSection className={this.props.className}
								sectionName='Releases'
								explanation='Here you can find our distribution binaries' />
				
				<ContentSection className={this.props.className}
								sectionName='Changelog'
								explanation='A log of all changes. Special considerations will be made for breaking changes' />
				
				<ContentSection className={this.props.className}
								sectionName='Documentation'
								explanation='Ill try to keep this updated'
								examples={documentationExamples}/>
				
				<ContentSection className={this.props.className}
								sectionName='Tutorials'
								explanation='Good luck noob'
								examples={tutorialExamples}/>
			</div>
		)
	}
}

export default AuroraEngine;