import Style from '../../Styles/HomeStyle/FruitsVegetables.module.css'


const BrandStore = ()=>{

    const arr = [
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_amul-brandStorefront_m_480_251022_01.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_dettol-brandStorefront_m_480_251022_02.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_harpic-brandStorefront_m_480_091122_03.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_lindberg-brandStorefront_m_480_251022_04.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_Tasties-brandStorefront_m_480_251022_05.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_durex-brandStorefront_m_480_251022_06.jpg'
    ]

    return(
        <div className={Style.Container}>
    <div className={Style.head} >
    Brand Store
    </div>
    <hr className={Style.hr}/>
     <div className={Style.child}>
        {arr.map((el)=>(

<div key={el}><img src={el} alt={el}/></div>
        ))}
 
     </div>
    </div>
        )
}

export default BrandStore