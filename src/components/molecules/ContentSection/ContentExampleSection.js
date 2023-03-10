import { CopyBlock, dracula, solarizedDark } from "react-code-blocks";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ContentExampleSection(props) {
	return (
		<div style={{ width: '80%' }}>
			<Tabs>
				<TabList>
					{props.examples.map(example => <Tab>{example.language}</Tab>)}
				</TabList>

				{props.examples.map(example => <TabPanel>
					<CopyBlock
						style={{
							fontSize: '8'
						}}
						text={example.code}
						language={example.language}
						showLineNumbers={example.showLineNumbers}
						startingLineNumber={example.startingLineNumber}
						wrapLines={example.wrapLines}
						theme={dracula}
						CodeBlock
					/>
				</TabPanel>)}
			</Tabs>
		</div>
	);
}