import React from 'react'

const BottomCarousel = ()=>{
    const [image,setImage] = React.useState('https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251122_400.jpg')

    let arr = [
'https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251122_400.jpg',
'https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_251122_400.jpg',
'https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251122_400.jpg',
'https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_251122_400.jpg'
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

export default BottomCarousel