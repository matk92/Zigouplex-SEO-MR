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
import ProductBoost from './pages/ProductBoost';
import ProductRecovery from './pages/ProductRecovery';
import ProductHydrate from './pages/ProductHydrate';
import ProductPerformPlus from './pages/ProductPerform+';
import BlogPostBienfaits from './pages/BlogPostBienfaits'
import BlogPostBoosterEnergie from './pages/BlogPostBoosterEnergie'
import BlogPostZigouplexVsTraditional from './pages/BlogPostZigouplexVsTraditional'
import BlogVenteZigouplexSport from './pages/BlogVenteZigouplexSport'
import BlogZigouplexBoost from './pages/BlogZigouplexBoost'
import BlogZigouplexRecovery from './pages/BlogZigouplexRecovery'
import BlogLesBienfaitsDeZigouplexParDrMarlega from './pages/BlogLesBienfaitsDeZigouplexParDrMarlega'
import LesBienfaitsDeLaNatureZigouplex from './pages/LesBienfaitsDeLaNatureZigouplex'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'
import BlogPostBakeryPartnership from './pages/BlogPostBakeryPartnership'
import ArriverZigouplexSport from './pages/ArriverZigouplexSport';

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
              <Route path="/products/boost" element={<ProductBoost />} />
              <Route path="/products/recovery" element={<ProductRecovery />} />
              <Route path="/products/hydrate" element={<ProductHydrate />} />
              <Route path="/products/perform+" element={<ProductPerformPlus />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/bienfaits-complements-alimentaires-naturels" element={<BlogPostBienfaits />} />
              <Route path="/blog/booster-energie-naturellement" element={<BlogPostBoosterEnergie />} />
              <Route path="/blog/zigouplex-vs-boissons-energisantes-traditionnelles" element={<BlogPostZigouplexVsTraditional />} />
              <Route path="/blog/les-bienfaits-de-zigouplex-par-dr-marlega" element={<BlogLesBienfaitsDeZigouplexParDrMarlega />} />
              <Route path="/blog/Les-Bienfaits-de-la-Nature-Zigouplex-Blog" element={<LesBienfaitsDeLaNatureZigouplex />} />
              <Route path="/blog/bakery-partnership" element={<BlogPostBakeryPartnership />} />
              <Route path="/blog/vente-zigouplex-sport" element={<BlogVenteZigouplexSport />} />
              <Route path="/blog/zigouplex-annonce-une-nouvelle-gamme-dédiée-aux-sportifs" element={<ArriverZigouplexSport />} />
              <Route path="/blog/vente-zigouplex-boost" element={<BlogZigouplexBoost />} />
              <Route path="/blog/vente-zigouplex-recovery" element={<BlogZigouplexRecovery />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
