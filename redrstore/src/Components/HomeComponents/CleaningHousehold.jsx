import Style from '../../Styles/HomeStyle/BankOffers.module.css'


const CleaningHousehold = ()=>{
    let arr = ['https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_cleaners-disfec_cleaningStorefront_m_480_251122_01.jpg'
    ,'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_detergebts-favric-cleaningStorefront_m_480_251122_02.jpg',
    'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_wipes-cleaningStorefront_m_480_251122_03.jpg',
    'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_fresheners-repellem-cleaningStorefront_m_480_251122_04.jpg',
   
    ]
    

    
    return(
       <div className={Style.Container}>
       <div className={Style.head} >
       Cleaning & Household
       </div>
       <hr className={Style.hr}/>
        <div className={Style.Bank}>
            {arr.map((el)=>(
                <div key={el}><img src={el} alt={el}/></div>
            ))}
        </div>
       </div>
    )
}

export default CleaningHousehold