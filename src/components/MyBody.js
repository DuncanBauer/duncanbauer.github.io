import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Used for routing to pages 

import Home          from './molecules/pages/Home';
import Blog          from './molecules/pages/Blog';
import Resources     from './molecules/pages/Resources';
import About         from './molecules/pages/About';
import Support       from './molecules/pages/Support';

import AuroraEngine  from './molecules/pages/projects/AuroraEngine';
import MapleLib 	 from './molecules/pages/projects/MapleLib';
import MapleServer 	 from './molecules/pages/projects/MapleServer';
import MapleWzEditor from './molecules/pages/projects/MapleWzEditor';

export default function MyBody(props) {
	return (
		<div className="Body">
			<Routes>
				<Route exact path="/" element={ <Home className="Body-region"/> } />

				<Route exact path="/auroraengine"	element={ <AuroraEngine  className="Body-region"/> } />
				<Route exact path="/maplelib"		element={ <MapleLib      className="Body-region"/> } />
				<Route exact path="/mapleserver"	element={ <MapleServer   className="Body-region"/> } />
				<Route exact path="/maplewzeditor"	element={ <MapleWzEditor className="Body-region"/> } />

				<Route exact path="/blog"        element={ <Blog        className="Body-region"/> } />
				<Route exact path="/resources"   element={ <Resources   className="Body-region"/> } />
				<Route exact path="/about"       element={ <About       className="Body-region"/> } />
				<Route exact path="/support"     element={ <Support     className="Body-region"/> } />
			</Routes>
		</div>
	)
}