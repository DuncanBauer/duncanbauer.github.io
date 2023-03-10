import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Used for routing to pages 

import Home          from './molecules/pages/Home';
import CPP           from './molecules/pages/blogs/CPP';
import JS            from './molecules/pages/blogs/JS';
import Resources     from './molecules/pages/Resources';
import About         from './molecules/pages/About';
import Support       from './molecules/pages/Support';

import AuroraEngine  from './molecules/pages/projects/AuroraEngine';
import MapleLib 	 from './molecules/pages/projects/MapleLib';
import MapleWzEditor from './molecules/pages/projects/MapleWzEditor';
import MapleClient 	 from './molecules/pages/projects/MapleClient';
import MapleServer 	 from './molecules/pages/projects/MapleServer';

export default function MyBody(props) {
	return (
		<div className="Body">
			<Routes>
				<Route exact path="/" element={ <Home className="Body-region"/> } />

				<Route exact path="/projects/auroraengine"	element={ <AuroraEngine  className="Body-region"/> } />
				<Route exact path="/projects/maplelib"		element={ <MapleLib      className="Body-region"/> } />
				<Route exact path="/projects/maplewzeditor"	element={ <MapleWzEditor className="Body-region"/> } />
				<Route exact path="/projects/mapleclient"	element={ <MapleClient   className="Body-region"/> } />
				<Route exact path="/projects/mapleserver"	element={ <MapleServer   className="Body-region"/> } />

				<Route exact path="/blogs/cpp"	element={ <CPP className="Body-region"/> } />
				<Route exact path="/blogs/js"	element={ <JS  className="Body-region"/> } />

				<Route exact path="/resources"	element={ <Resources className="Body-region"/> } />
				<Route exact path="/about"		element={ <About	 className="Body-region"/> } />
				<Route exact path="/support"	element={ <Support	 className="Body-region"/> } />
			</Routes>
		</div>
	)
}