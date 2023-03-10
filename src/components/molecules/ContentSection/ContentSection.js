import ContentSectionHeader from './ContentSectionHeader';
import ContentExplanationSection from './ContentExplanationSection';
import ContentExampleSection from './ContentExampleSection';

export default function ContentSection(props) {
	return (
		<div className={props.className}>
			<div style={{ display: 'flex', flexFlow: 'column', width: '100%', textAlign: 'left', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px'}}>
				<ContentSectionHeader sectionName={props.sectionName}/>

				{ props.examples != null ?
					<div style={{ display: 'flex', flexFlow: 'row', width: '100%' }}>
						<ContentExplanationSection explanation={props.explanation}/>
						<ContentExampleSection examples={props.examples}/>
					</div> :
					<div style={{ display: 'flex', flexFlow: 'row', width: '100%' }}>
						<ContentExplanationSection explanation={props.explanation}/>
					</div>
				}
			</div>
		</div>
	);
}