import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Used for routing to pages 

import Home          from './molecules/pages/Home';
import ProjectAurora from './molecules/pages/ProjectAurora';
import Blog          from './molecules/pages/Blog';
import Resources     from './molecules/pages/Resources';
import About         from './molecules/pages/About';
import Support       from './molecules/pages/Support';

import AuroraEngine  from './molecules/pages/projectaurora/AuroraEngine';
import AuroraMaple   from './molecules/pages/projectaurora/AuroraMaple';

export default function MyBody(props) {
	return (
		<div className="Body">
			<Routes>
				<Route exact path="/" element={ <Home className="Body-region"/> } />

				<Route exact path="/projectaurora"           element={ <ProjectAurora className="Body-region"/> } />
				<Route exact path="/projectaurora/enginelib" element={ <AuroraEngine  className="Body-region"/> } />
				<Route exact path="/projectaurora/maplelib"  element={ <AuroraMaple   className="Body-region"/> } />

				<Route exact path="/blog"        element={ <Blog        className="Body-region"/> } />
				<Route exact path="/resources"   element={ <Resources   className="Body-region"/> } />
				<Route exact path="/about"       element={ <About       className="Body-region"/> } />
				<Route exact path="/support"     element={ <Support     className="Body-region"/> } />
			</Routes>
		</div>
	)
}