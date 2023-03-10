import { Link } from 'react-router-dom'; // Used for routing to pages 
import { HashLink as AnchorLink } from 'react-router-hash-link'; // Used for routing to anchors. Anchors must be linked with #id where id is the div id that is being linked to 
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';

export default function MySidebar() {
	const { collapseSidebar } = useProSidebar();
	return (
		<div className="Sidebar">
			<Sidebar width='290px' collapsedWidth='80px' height='100%'
				rootStyles={{
					button: () => {
						return {
							color: "white",
							backgroundColor: "#333333d9",
							"&:hover": {
								backgroundColor: "#333333f2 !important",
								fontWeight: "bold !important"
							},
						};
				},}}>
				
				<Menu menuItemStyles={{
					button: ({ level }) => {
						if (level >= 0) {
							return {
								color: "white",
								backgroundColor: "#333333d9",
								"&:hover": {
									backgroundColor: "#333333e6 !important",
									fontWeight: "bold !important"
								},
							};
						}
					},}}>

					<div className="Sidebar-header">
						<MenuItem icon={<MenuOutlinedIcon />}
							onClick={() => {
								collapseSidebar();
						}}/>
					</div>

					<MenuItem icon={<HomeOutlinedIcon/>} component={<Link to="/" />}>Home</MenuItem>
					<SubMenu label="Project Aurora">
						<MenuItem icon={<BookmarkBorderOutlinedIcon />}  component={<AnchorLink to="/projectaurora#introduction" />}>Introduction</MenuItem>
						
						<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Aurora Engine Library">
							<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/projectaurora/enginelib#gettingStarted" />}>Getting Started</MenuItem>
							<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/projectaurora/enginelib#releases"		 />}>Releases</MenuItem>
							<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/projectaurora/enginelib#changelog"		 />}>Changelog</MenuItem>
							<MenuItem icon={<ApiOutlinedIcon/>}					 component={<AnchorLink to="/projectaurora/enginelib#api"			 />}>Api</MenuItem>
							<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/projectaurora/enginelib#documentation"	 />}>Documentation</MenuItem>
							<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/projectaurora/enginelib#tutorials"		 />}>Tutorials</MenuItem>
						</SubMenu>
						
						<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Aurora Maple Library">
							<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/projectaurora/maplelib#gettingStarted" />}>Getting Started</MenuItem>
							<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/projectaurora/maplelib#releases"		/>}>Releases</MenuItem>
							<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/projectaurora/maplelib#changelog"		/>}>Changelog</MenuItem>
							<MenuItem icon={<ApiOutlinedIcon/>} 				 component={<AnchorLink to="/projectaurora/maplelib#api"			/>}>Api</MenuItem>
							<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/projectaurora/maplelib#documentation"	/>}>Documentation</MenuItem>
							<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/projectaurora/maplelib#tutorials"		/>}>Tutorials</MenuItem>
						</SubMenu>

						<MenuItem icon={<QuestionMarkOutlinedIcon/>} 	 component={<AnchorLink to="/projectaurora#FAQ"			 />}>FAQ</MenuItem>
						<MenuItem icon={<BuildOutlinedIcon/>}			 component={<AnchorLink to="/projectaurora#support"		 />}>Support</MenuItem>

					</SubMenu>

					<MenuItem icon={<CreateOutlinedIcon/>}   component={<Link to="/blog"      />}>Blog</MenuItem>
					<MenuItem icon={<SettingsOutlinedIcon/>} component={<Link to="/resources" />}>Resources</MenuItem>
					<MenuItem icon={<InfoOutlinedIcon/>}	 component={<Link to="/about"     />}>About</MenuItem>

				</Menu>
			</Sidebar>
		</div>
	);
}