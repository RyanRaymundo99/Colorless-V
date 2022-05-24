import { Navbar, Hero, Services, WebHosting, GamingHosting, CloudHosting, Pricing, FeaturesBanner, Testimonial, Footer } from '../../components/Export/Export';
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Hero/>
      <Services/>
      <WebHosting/>
      <GamingHosting/>
      <Pricing/>
      <CloudHosting/>
      <FeaturesBanner/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home