import React, { useContext } from 'react';
import Navbar from '../components/UniversalItems/Navbar';
import Showcase from '../components/Showcase';
import Support from '../components/Support';
import Footer from '../components/UniversalItems/Footer';
import FlashgridLeft from '../components/FlashgridLeft';
import FlashgridRight from '../components/FlashgridRight';
import Featured from '../components/Featured';
import DoubleImg from '../components/DoubleImg';
import { FeaturedProductsContext, GridProductsContext } from '../contexts/context';




const HomeView = () => {

  const products = useContext(FeaturedProductsContext)
  const gridProducts = useContext(GridProductsContext)

return (
    <>
    <div className="homepage">
    <Navbar />
     <Showcase />
     <Featured title="Featured Products" items={products}/>
     <DoubleImg />
     <FlashgridLeft items={gridProducts}/>
     <FlashgridRight items={gridProducts}/>
     <Support />
     <Footer />
     </div>
    </>
  )
}

export default HomeView