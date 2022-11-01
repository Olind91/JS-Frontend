import React, { useContext } from 'react';
import Navbar from '../components/UniversalItems/Navbar';
import Showcase from '../components/Showcase';
import Support from '../components/Support';
import Footer from '../components/UniversalItems/Footer';
import FlashgridLeft from '../components/FlashgridLeft';
import FlashgridRight from '../components/FlashgridRight';
import Featured from '../components/Featured';
import DoubleImg from '../components/DoubleImg';
import { ProductContext } from '../contexts/context';




const HomeView = () => {

  const productContext = useContext(ProductContext)
  

return (
    <>
    <div className="homepage">
    <Navbar />
     <Showcase />
     <Featured title="Featured Products" items={productContext.featuredProducts}/>
     <DoubleImg />
     {/* <FlashgridLeft items={productContext.flashGridProducts}/>  */}
     {/* <FlashgridRight /> */}
     <Support />
     <Footer />
     </div>
    </>
  )
}

export default HomeView