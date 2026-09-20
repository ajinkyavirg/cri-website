import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Framework from '@/pages/Framework';
import ObserverProblem from '@/pages/ObserverProblem';
import Practice from '@/pages/Practice';
import ISC from '@/pages/ISC';
import VedicFoundations from '@/pages/VedicFoundations';
import Writing from '@/pages/Writing';
import About from '@/pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/observer-problem" element={<ObserverProblem />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/isc" element={<ISC />} />
          <Route path="/vedic-foundations" element={<VedicFoundations />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
