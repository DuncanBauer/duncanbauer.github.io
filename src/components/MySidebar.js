import { Link }    from 'react-router-dom';        // Used for routing to pages 
import { HashLink as AnchorLink } from 'react-router-hash-link';  // Used for routing to anchors. Anchors must be linked with #id where id is the div id that is being linked to 
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

export default function MySidebar() {
	const { collapseSidebar } = useProSidebar();
	return (
		<div className="Sidebar">
			<Sidebar width='290px' collapsedWidth='80px' height='100%'
				rootStyles={{
					button: ({}) => {
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

					<SubMenu label="Project Aurora">
						<MenuItem component={<AnchorLink to="/projectaurora#overview"       />}>Overview</MenuItem>
						<MenuItem component={<AnchorLink to="/projectaurora#gettingStarted" />}>Getting Started</MenuItem>
						<SubMenu label="Aurora Engine Library" icon={<MenuBookOutlinedIcon />}>
							<MenuItem component={<AnchorLink to="/projectaurora/enginelib#introduction"  />}>Introduction</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/enginelib#releases"      />}>Releases</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/enginelib#changelog"     />}>Changelog</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/enginelib#documentation" />}>Documentation</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/enginelib#tutorials"     />}>Tutorials</MenuItem>
						</SubMenu>
						<SubMenu label="Aurora Maple Library" icon={<MenuBookOutlinedIcon />}>
							<MenuItem component={<AnchorLink to="/projectaurora/maplelib#introduction"  />}>Introduction</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/maplelib#releases"      />}>Releases</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/maplelib#changelog"     />}>Changelog</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/maplelib#documentation" />}>Documentation</MenuItem>
							<MenuItem component={<AnchorLink to="/projectaurora/maplelib#tutorials"     />}>Tutorials</MenuItem>
						</SubMenu>
						<MenuItem component={<AnchorLink to="/projectaurora#FAQ" />}>FAQ</MenuItem>
					</SubMenu>

					<MenuItem component={<Link to="/crystallisa" />}>Crystal Lisa</MenuItem>
					<MenuItem component={<Link to="/blog"        />}>Blog</MenuItem>
					<MenuItem component={<Link to="/resources"   />}>Resources</MenuItem>
					<MenuItem component={<Link to="/about"       />}>About</MenuItem>
					<MenuItem component={<Link to="/support"     />}>Support</MenuItem>

				</Menu>
			</Sidebar>
		</div>
	);
}