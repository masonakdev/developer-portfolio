import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Interests from './components/sections/Interests';

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <Hero />
        <Certifications />
        <Projects />
        <Experience />
        <Education />
        <Interests />
      </div>
      <footer className="mt-6 py-8 text-center text-sm text-muted-foreground border-t">
        <p>&copy; {new Date().getFullYear()} Mason Wilcox. All rights reserved.</p>
      </footer>
    </Layout>
  );
}

export default App;
