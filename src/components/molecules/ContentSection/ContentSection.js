import ContentSectionHeader from './ContentSectionHeader';
import ContentExplanationSection from './ContentExplanationSection';
import ContentExampleSection from './ContentExampleSection';

export default function ContentSection(props) {
	return (
		<div className={props.style}>
			<div style={{ display: 'flex', flexFlow: 'column', width: '100%' }}>
				<ContentSectionHeader />

				<div style={{ display: 'flex', flexFlow: 'row', width: '100%' }}>
					<ContentExplanationSection />
					<ContentExampleSection />
				</div>
			</div>
		</div>
	);
}