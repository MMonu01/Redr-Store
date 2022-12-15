import React from 'react'

const TopCarousel = ()=>{
    const [image,setImage] = React.useState('https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_121222_Bangalore.jpg')

    let arr = [
'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_121222_Bangalore.jpg',
'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dairy_460px-011222.jpg',
'https://www.bigbasket.com/media/uploads/banner_images/hp_m_GOURMETPL_SnackswithNoLimits_460px-011222.jpg',
'https://www.bigbasket.com/media/uploads/banner_images/Cp_m_GM_EPBanner_460-051222.jpg'
]

let i =1;

React.useEffect(()=>{
const intervalId = setInterval(()=>{
    if(i===arr.length){
        i=0;
    }
    setImage(arr[i])
    i++
},3000)
},[])


return(
<>
<img src={image} alt={image}/>
</>
    )

}

export default TopCarousel