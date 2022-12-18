import Style from '../../Styles/SingleFruitsStyle/About.module.css'
const About = ({description,product_name})=>{

    return(
<div className={Style.Container} >
    <h1>{product_name}</h1>
    <hr />
    <p>
        {description}
    </p>
</div>
    )


}

export default About