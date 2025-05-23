import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Navbar
import Navbar from './components/Navbar/Navbar';
// Import Footer
import Footer from "./components/Footer/Footer";
// Import ThemeSwitcher
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

// Import pages
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Passions from "./pages/Passions/Passions";
import Playground from "./pages/Playground/Playground";


export default function App() {
    
    return (
        <Router>
            <div className="bg-background flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/passions" element={<Passions />} />
                        <Route path="/playground" element={<Playground />} />
                    </Routes>
                </main>
                <ThemeSwitcher />
                <Footer />
            </div>
        </Router>
    );
}