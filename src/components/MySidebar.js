import { Link } from 'react-router-dom'; // Used for routing to pages 
import { HashLink as AnchorLink } from 'react-router-hash-link'; // Used for routing to anchors. Anchors must be linked with #id where id is the div id that is being linked to 
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
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
					<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Aurora Engine">
						<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/auroraengine#gettingStarted" />}>Getting Started</MenuItem>
						<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/auroraengine#releases"		  />}>Releases</MenuItem>
						<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/auroraengine#changelog"	  />}>Changelog</MenuItem>
						<MenuItem icon={<ApiOutlinedIcon/>}					 component={<AnchorLink to="/auroraengine#api"			  />}>Api</MenuItem>
						<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/auroraengine#documentation"  />}>Documentation</MenuItem>
						<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/auroraengine#tutorials"	  />}>Tutorials</MenuItem>
						<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/auroraengine#resources"	  />}>Resources</MenuItem>
						<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/auroraengine#faq"			  />}>FAQ</MenuItem>
						<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/auroraengine#support"		  />}>Support</MenuItem>
					</SubMenu>
					
					<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Maple Library">
						<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/maplelib#gettingStarted" />}>Getting Started</MenuItem>
						<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/maplelib#releases"		  />}>Releases</MenuItem>
						<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/maplelib#changelog"	  />}>Changelog</MenuItem>
						<MenuItem icon={<ApiOutlinedIcon/>} 				 component={<AnchorLink to="/maplelib#api"			  />}>Api</MenuItem>
						<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/maplelib#documentation"  />}>Documentation</MenuItem>
						<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/maplelib#tutorials"	  />}>Tutorials</MenuItem>
						<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/maplelib#resources"	  />}>Resources</MenuItem>
						<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/maplelib#faq"			  />}>FAQ</MenuItem>
						<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/maplelib#support"		  />}>Support</MenuItem>
					</SubMenu>
					
					<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Maple Server">
						<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/mapleserver#gettingStarted" />}>Getting Started</MenuItem>
						<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/mapleserver#releases"		 />}>Releases</MenuItem>
						<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/mapleserver#changelog"		 />}>Changelog</MenuItem>
						<MenuItem icon={<ApiOutlinedIcon/>} 				 component={<AnchorLink to="/mapleserver#api"			 />}>Api</MenuItem>
						<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/mapleserver#documentation"  />}>Documentation</MenuItem>
						<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/mapleserver#tutorials"		 />}>Tutorials</MenuItem>
						<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/mapleserver#resources"		 />}>Resources</MenuItem>
						<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/mapleserver#faq"			 />}>FAQ</MenuItem>
						<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/mapleserver#support"		 />}>Support</MenuItem>
					</SubMenu>
					
					<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Maple Wz Editor">
						<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/maplewzeditor#gettingStarted" />}>Getting Started</MenuItem>
						<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/maplewzeditor#releases"	   />}>Releases</MenuItem>
						<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/maplewzeditor#changelog"	   />}>Changelog</MenuItem>
						<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/maplewzeditor#tutorials"	   />}>Tutorials</MenuItem>
						<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/maplewzeditor#resources"	   />}>Resources</MenuItem>
						<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/maplewzeditor#faq"			   />}>FAQ</MenuItem>
						<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/maplewzeditor#support"		   />}>Support</MenuItem>
					</SubMenu>

					<MenuItem icon={<CreateOutlinedIcon/>}   component={<Link to="/blog"      />}>Blog</MenuItem>
					<MenuItem icon={<InfoOutlinedIcon/>}	 component={<Link to="/about"     />}>About</MenuItem>

				</Menu>
			</Sidebar>
		</div>
	);
}