import Style from '../../Styles/HomeStyle/Beauty.module.css'

const Beauty = ()=>{

    const arr = [
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hpmakeup-mania-_beautyStorefront_m_251122_560x378_01.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_min-40-beautyStorefront_m_251122_275x184_02.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_under-199-beautyStorefront_m_251122_275x184_03.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_secent-sation-beautyStorefront_m_251122_275x184_04.jpg',
        'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_winter-lotions-beautyStorefront_m_251122_275x184_05.jpg',
        
    ]

    return(
        <div className={Style.Container}>
    <div className={Style.head} >
    Beauty and Hygiene
    </div>
    <hr className={Style.hr}/>
     <div className={Style.child}>
        
<div key={arr[0]}><img src={arr[0]} alt={arr[0]}/></div>
        
        <div>
<div key={arr[1]}><img src={arr[1]} alt={arr[1]}/></div>
<div key={arr[2]}><img src={arr[2]} alt={arr[2]}/></div>
<div key={arr[3]}><img src={arr[3]} alt={arr[3]}/></div>
<div key={arr[4]}><img src={arr[4]} alt={arr[4]}/></div>
        </div>
        
     </div>
    </div>
        )
}

export default Beauty