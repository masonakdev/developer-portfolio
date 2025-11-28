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
      <div className="space-y-3.5">
        <Hero />
        <Experience />
        <Certifications />
        <Projects />
        <Education />
        <Interests />
      </div>
      <footer className="mt-6 py-8 text-center text-sm text-muted-foreground border-t">
        <p>
          &copy; {new Date().getFullYear()} Mason Wilcox. Released under the MIT License.
          <span className="mx-2">|</span>
          <a
            href="https://github.com/masonakdev/developer-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-foreground transition-colors"
          >
            Source Code
          </a>
        </p>
      </footer>
    </Layout>
  );
}

export default App;
