import React from 'react'
import TopCarousel from '../Components/HomeComponents/TopCarousel'
import Button6 from '../Components/HomeComponents/Button6'
import BankOffers from '../Components/HomeComponents/BankOffers'
import BestSellers from '../Components/HomeComponents/BestSellers'
import TopOffers from '../Components/HomeComponents/TopOffers'
import FruitsVegetables from '../Components/HomeComponents/FruitsVegetables'
import DailyStaples from '../Components/HomeComponents/DailyStaples'
import SnackStore from '../Components/HomeComponents/SnackStore'
import CleaningHousehold from '../Components/HomeComponents/CleaningHousehold'
import Beauty from '../Components/HomeComponents/Beauty'
import BottomCarousel from '../Components/HomeComponents/BottomCarousel'
import BrandStore from '../Components/HomeComponents/BrandStore'
import OnlineStore from '../Components/HomeComponents/OnlineStore'
import Footer from '../Components/Footer'
const Home = ()=>{
    return(
        <>
<main>
    <div style={{height:"71px",width:"100px"}}></div>
<TopCarousel/>
<Button6/>
<BankOffers/>
<BestSellers/>
<TopOffers/>
<FruitsVegetables/>
<DailyStaples/>
<SnackStore/>
<CleaningHousehold/>
<Beauty/>
<BottomCarousel/>
<BrandStore/>
<OnlineStore/>
</main>
<Footer/>
        </>
    )
}


export default Home