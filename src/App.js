import './App.css';

import Header from './components/molecules/Header';
import Section from './components/molecules/Section';
import Footer from './components/molecules/Footer';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Section className="Section-container" name="About"          description="About me"                   style_0="Top-dog-0" style_1="Top-dog-column" style_2="Top-dog-column" />
      <Section className="Section-container" link="https://DuncanBauer.github.io/ProjectAurora/" name="Project Aurora" description="Project Aurora Description" style_0="Top-dog-1" />
      <Section className="Section-container" name="Crystal Lisa"   description="Crystal Lisa Description"   style_0="Top-dog-2" />
      <Section className="Section-container" name="Blog"           description="Blog post?"                 style_0="Top-dog-3" />
      <Footer/>
    </div>
  );
}