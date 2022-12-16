import React from 'react'
import Style from '../Styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faPinterest,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'

let arr = [
    'https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg',
"https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1996_100_2x.png",

"https://assets.pharmeasy.in/web-assets/dist/0e010044.svg",
"https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg",
"https://assets.pharmeasy.in/web-assets/dist/e9445364.svg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2z8xoM1Wr5w7CVv8zVsVCTAp4rgaNT5YljapDfC9-Q&s"

]



const Footer = ()=>{

    return(
        <footer >
            <div className={Style.top}>
                <div className={Style.Redrstore}>
<div className={Style.head}>REDR STORE</div>
<div>About Us</div>
<div>In News</div>
<div>Green Redr Store</div>
<div>Privacy Policy</div>
<div>Affiliate</div>
<div>Terms and Conditions</div>
<div>Careers At bigbasket</div>
<div>bb Instant</div>
<div>bb Daily</div>
<div>bb Blog</div>
<div>bbnow</div>
                </div>


                <div>
                    <div className={Style.head}>Help</div>
                    <div>FAQs</div>
                    <div>Contact Us</div>
                    <div>bb Wallet FAQs</div>
                    <div>bb Wallet T&Cs</div>
                    <div>Vendor Connect</div>
                </div>


                <div>
                    <div className={Style.head}>Download Our App</div>
                    <div><img src='https://www.bbassets.com/static/v2616/custPage/build/content/img/Google-App-store-icon.png' alt='Google play'/></div>
                    <div><img src='https://www.bbassets.com/static/v2616/custPage/build/content/img/Apple-App-store-icon.png' alt='Apple Store'/></div>
                </div>

                <div>
                    <div className={Style.head}>Get Social With Us</div>
                    <div className={Style.Social}>
                <div><FontAwesomeIcon icon={faFacebook} className={Style.facebook}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faPinterest} className={Style.pinterest}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faTwitter} className={Style.twitter}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faInstagram} className={Style.instagram}></FontAwesomeIcon></div>
                    </div>
                </div>
            </div>

<hr style={{width:"90%",margin:"auto"}} />
         
                <table className={Style.Bottom}>
                    <tbody className={Style.tbody}>
                        <tr className={Style.tr}>
                        <td className={Style.color}>POPULAR CATEGORIES:</td>
                        <td>Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes,</td>
                        </tr>

                        <tr className={Style.tr}>
                        <td className={Style.color} >POPULAR BRANDS:</td>
                        <td>Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez, Yera, Yakult, Britannia, Wow Momo, Fortune , Haldirams , Ferrero, Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk, Pedigree,</td>
                        </tr>

                        <tr className={Style.tr}>
                        <td className={Style.color} >CITIES WE SERVE:</td>
                        <td>Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra, Kozhikode,</td>
                        </tr>

                        <tr className={Style.tr}>
                        <td className={Style.color} >PAYMENT OPTIONS:</td>
                        <td>
                            <div className={Style.payment}>
                            <p style={{fontSize:"13px"}}>CASH ON DELIVERY</p>
                                <img src={arr[0]} alt='Visa'/>
                                <img src={arr[1]} alt="masterCard" />
                                <img src={arr[2]} alt="Paytm" />
                                <img src={arr[3]} alt="Mobi kwik" />
                                <img src={arr[4]} alt="RuPay" />
                                <img src={arr[5]} alt="American Express" />
                            </div>
                        </td>
                        </tr>
                      
                    </tbody>
                </table>

                <div className={Style.copyright}>
                    <p>

                Copyright © 2021-2023 Supermarket Grocery Supplies Pvt Ltd
                    </p>
                </div>
        </footer>
    )
}

export default Footer