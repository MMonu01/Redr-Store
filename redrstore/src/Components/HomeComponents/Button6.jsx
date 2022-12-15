import Style from '../../Styles/HomeStyle/Button6.module.css'


const Button6 = ()=>{
    let arr = ['https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_01.png'
,'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png',
'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_03.png',
'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_04.png',
'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_05.png',
'https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_06.png'
]


return(
    <div className={Style.button6}>
        {arr.map((el)=>(
            <div key={el}><img src={el} alt={el}/></div>
        ))}
    </div>
)
}

export default Button6