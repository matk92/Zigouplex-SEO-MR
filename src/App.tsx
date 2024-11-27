import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ProductEnergy from './pages/ProductEnergy'
import ProductFocus from './pages/ProductFocus'
import ProductRelax from './pages/ProductRelax'
import BlogPostBienfaits from './pages/BlogPostBienfaits'
import BlogPostBoosterEnergie from './pages/BlogPostBoosterEnergie'
import BlogPostZigouplexVsTraditional from './pages/BlogPostZigouplexVsTraditional'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/energy" element={<ProductEnergy />} />
              <Route path="/products/focus" element={<ProductFocus />} />
              <Route path="/products/relax" element={<ProductRelax />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/bienfaits-complements-alimentaires-naturels" element={<BlogPostBienfaits />} />
              <Route path="/blog/booster-energie-naturellement" element={<BlogPostBoosterEnergie />} />
              <Route path="/blog/zigouplex-vs-boissons-energisantes-traditionnelles" element={<BlogPostZigouplexVsTraditional />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

