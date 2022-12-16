import Style from '../../Styles/HomeStyle/FruitsVegetables.module.css'


const DailyStaples = ()=>{

    const arr = [
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_atta-flour-staplesStorefront_m_480_250922_01.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_rice-staplesStorefront_m_480_250922_02.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_dals-pulses-staplesStorefront_m_480_250922_03.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_cooking-oils-staplesStorefront_m_480_250922_04.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_dry-fruits-staplesStorefront_m_480_250922_05.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_salt-staplesStorefront_m_480_250922_06.jpg'
    ]

    return(
        <div className={Style.Container}>
    <div className={Style.head} >
    Your Daily Staples
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

export default DailyStaples