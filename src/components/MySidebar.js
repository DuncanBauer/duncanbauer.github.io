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
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

import { SiCplusplus, SiJavascript } from "react-icons/si";
import { SlLayers } from "react-icons/sl";

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
					<SubMenu icon={<SlLayers/>} label="Projects">
						<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Aurora Engine">
							<MenuItem icon={<BoltOutlinedIcon/>}				 component={<AnchorLink to="/projects/auroraengine"				  />}>Introduction</MenuItem>
							<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/projects/auroraengine#gettingStarted" />}>Getting Started</MenuItem>
							<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/projects/auroraengine#releases"		  />}>Releases</MenuItem>
							<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/projects/auroraengine#changelog"	  />}>Changelog</MenuItem>
							<MenuItem icon={<ApiOutlinedIcon/>}					 component={<AnchorLink to="/projects/auroraengine#api"			  />}>Api</MenuItem>
							<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/projects/auroraengine#documentation"  />}>Documentation</MenuItem>
							<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/projects/auroraengine#tutorials"	  />}>Tutorials</MenuItem>
							<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/projects/auroraengine#resources"	  />}>Resources</MenuItem>
							<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/projects/auroraengine#faq"			  />}>FAQ</MenuItem>
							<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/projects/auroraengine#support"		  />}>Support</MenuItem>
						</SubMenu>
						
						<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Maple Library">
							<MenuItem icon={<BoltOutlinedIcon/>}				 component={<AnchorLink to="/projects/maplelib"				  />}>Introduction</MenuItem>
							<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/projects/maplelib#gettingStarted" />}>Getting Started</MenuItem>
							<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/projects/maplelib#releases"		  />}>Releases</MenuItem>
							<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/projects/maplelib#changelog"	  />}>Changelog</MenuItem>
							<MenuItem icon={<ApiOutlinedIcon/>} 				 component={<AnchorLink to="/projects/maplelib#api"			  />}>Api</MenuItem>
							<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/projects/maplelib#documentation"  />}>Documentation</MenuItem>
							<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/projects/maplelib#tutorials"	  />}>Tutorials</MenuItem>
							<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/projects/maplelib#resources"	  />}>Resources</MenuItem>
							<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/projects/maplelib#faq"			  />}>FAQ</MenuItem>
							<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/projects/maplelib#support"		  />}>Support</MenuItem>
						</SubMenu>
						
						<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Maple Wz Editor">
							<MenuItem icon={<BoltOutlinedIcon/>}				 component={<AnchorLink to="/projects/maplewzeditor"				   />}>Introduction</MenuItem>
							<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/projects/maplewzeditor#gettingStarted" />}>Getting Started</MenuItem>
							<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/projects/maplewzeditor#releases"	   />}>Releases</MenuItem>
							<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/projects/maplewzeditor#changelog"	   />}>Changelog</MenuItem>
							<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/projects/maplewzeditor#tutorials"	   />}>Tutorials</MenuItem>
							<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/projects/maplewzeditor#resources"	   />}>Resources</MenuItem>
							<MenuItem icon={<QuestionMarkOutlinedIcon/>}		 component={<AnchorLink to="/projects/maplewzeditor#faq"			   />}>FAQ</MenuItem>
							<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/projects/maplewzeditor#support"		   />}>Support</MenuItem>
						</SubMenu>
						
						<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Maple Client">
							<MenuItem icon={<BoltOutlinedIcon/>}				 component={<AnchorLink to="/projects/mapleclient"				 />}>Introduction</MenuItem>
							<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/projects/mapleclient#gettingStarted" />}>Getting Started</MenuItem>
							<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/projects/mapleclient#releases"		 />}>Releases</MenuItem>
							<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/projects/mapleclient#changelog"		 />}>Changelog</MenuItem>
							<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/projects/mapleclient#resources"		 />}>Resources</MenuItem>
							<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/projects/mapleclient#faq"			 />}>FAQ</MenuItem>
							<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/projects/mapleclient#support"		 />}>Support</MenuItem>
						</SubMenu>
						
						<SubMenu icon={<StarOutlineOutlinedIcon/>} label="Maple Server">
							<MenuItem icon={<BoltOutlinedIcon/>}				 component={<AnchorLink to="/projects/mapleserver"				 />}>Introduction</MenuItem>
							<MenuItem icon={<PlayCircleOutlineOutlinedIcon/>}	 component={<AnchorLink to="/projects/mapleserver#gettingStarted" />}>Getting Started</MenuItem>
							<MenuItem icon={<NewReleasesOutlinedIcon/>} 		 component={<AnchorLink to="/projects/mapleserver#releases"		 />}>Releases</MenuItem>
							<MenuItem icon={<PublishedWithChangesOutlinedIcon/>} component={<AnchorLink to="/projects/mapleserver#changelog"		 />}>Changelog</MenuItem>
							<MenuItem icon={<ApiOutlinedIcon/>} 				 component={<AnchorLink to="/projects/mapleserver#api"			 />}>Api</MenuItem>
							<MenuItem icon={<MenuBookOutlinedIcon/>} 			 component={<AnchorLink to="/projects/mapleserver#documentation"  />}>Documentation</MenuItem>
							<MenuItem icon={<LaptopOutlinedIcon/>} 				 component={<AnchorLink to="/projects/mapleserver#tutorials"		 />}>Tutorials</MenuItem>
							<MenuItem icon={<SettingsOutlinedIcon/>}			 component={<AnchorLink to="/projects/mapleserver#resources"		 />}>Resources</MenuItem>
							<MenuItem icon={<QuestionMarkOutlinedIcon/>} 		 component={<AnchorLink to="/projects/mapleserver#faq"			 />}>FAQ</MenuItem>
							<MenuItem icon={<BuildOutlinedIcon/>}				 component={<AnchorLink to="/projects/mapleserver#support"		 />}>Support</MenuItem>
						</SubMenu>
					</SubMenu>

					<SubMenu icon={<CreateOutlinedIcon/>} label="Blogs">
						<MenuItem icon={<SiCplusplus/>}  component={<Link to="/blogs/cpp" />}>C++</MenuItem>
						<MenuItem icon={<SiJavascript/>} component={<Link to="/blogs/js"  />}>JS</MenuItem>
					</SubMenu>

					<MenuItem icon={<InfoOutlinedIcon/>} component={<Link to="/about" />}>About</MenuItem>

				</Menu>
			</Sidebar>
		</div>
	);
}