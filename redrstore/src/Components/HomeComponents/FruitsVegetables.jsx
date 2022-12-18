import Style from '../../Styles/HomeStyle/FruitsVegetables.module.css'
import {Link} from 'react-router-dom'

const FruitsVegetables = ()=>{

    const arr = [
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_organic-fnc-fnv_Storefront_m_251122_01.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_fresh-fruits-fnv_Storefront_m_251122_02.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_fresh-vegetables-fnv_Storefront_m_251122_03.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_cuts-sprouts-fnv_Storefront_m_251122_04.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_exotic-fruits-fnv_Storefront_m_251122_05.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_herbs-seasonings-fnv_Storefront_m_251122_06.jpg'
    ]

   
    return(
        <div className={Style.Container}>
    <div className={Style.head} >
    Fruits and Vegetables
    </div>
    <hr className={Style.hr}/>
     <div className={Style.child}>
        
<div key={arr[0]}><img src={arr[0]} alt={arr[0]}/></div>
<div key={arr[1]} ><Link to="/products/freshfruits"><img src={arr[1]} alt={arr[1]}/></Link></div>
<div key={arr[2]}><img src={arr[2]} alt={arr[2]}/></div>
<div key={arr[3]}><img src={arr[3]} alt={arr[3]}/></div>
<div key={arr[4]}><img src={arr[4]} alt={arr[4]}/></div>
<div key={arr[5]}><img src={arr[5]} alt={arr[5]}/></div>
        
     </div>
    </div>
        )
}

export default FruitsVegetables