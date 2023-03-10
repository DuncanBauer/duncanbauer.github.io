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
				showLineNumbers: false,
				startingLineNumber: 1,
				wrapLines: true
			},
			{
				language: 'python',
				code: `print("Hello world")`,
				showLineNumbers: false,
				startingLineNumber: 1,
				wrapLines: true
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
				showLineNumbers: false,
				startingLineNumber: 1,
				wrapLines: true
			},
			{
				language: 'python',
				code: `print("Hello world")`,
				showLineNumbers: false,
				startingLineNumber: 1,
				wrapLines: true
			}
		];

		return (
			<div className="Body-content">
				<div id="gettingStarted">
					<h1>Aurora Engine Lib</h1>
					<ContentSection className={this.props.className}
									sectionName='Getting Started'
									explanation='A simple hello world description whose width can definitely, 100%, totally fill 100% of the screens width, right? I need to add more text to actually test that though' />
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
					
				<div id="api">
					<ContentSection className={this.props.className}
									sectionName='Api'
									explanation='Ill try to keep this updated'/>
				</div>
					
				<div id="documentation">
					<ContentSection className={this.props.className}
									sectionName='Documentation'
									explanation='Ill try to keep this updated'
									examples={documentationExamples}/>
				</div>
					
				<div id="tutorials">
					<ContentSection className={this.props.className}
									sectionName='Tutorials'
									explanation='Good luck noob'
									examples={tutorialExamples}/>
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

export default AuroraEngine;