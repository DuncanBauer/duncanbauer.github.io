import ContentSectionHeader from './ContentSectionHeader';
import ContentExplanationSection from './ContentExplanationSection';
import ContentExampleSection from './ContentExampleSection';

export default function ContentSection(props) {
	return (
		<div className={props.className}>
			<div style={{ display: 'flex', flexFlow: 'column', width: '100%', textAlign: 'left', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px'}}>
				<ContentSectionHeader sectionName={props.sectionName}/>

				{/* If there is an examples property passed to this component, add an extra column for the example codeblock */}
				{ props.examples != null ?
					<div style={{ display: 'flex', flexFlow: 'row', width: '100%' }}>
						<ContentExplanationSection explanation={props.explanation}/>
						<ContentExampleSection examples={props.examples}/>
					</div> :
					/* If there is no examples property, the component only has the one column */
					<div style={{ display: 'flex', flexFlow: 'row', width: '100%' }}>
						<ContentExplanationSection explanation={props.explanation}/>
					</div>
				}
			</div>
		</div>
	);
}