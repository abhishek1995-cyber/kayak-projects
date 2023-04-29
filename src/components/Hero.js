import heroImage from '../assets/07092017_Kayaking_01.jpg'
export default function Hero(){
    return (
        <div className='hero container padding'>
        <article className='flex'>
            <figure className='hero-img'>
                <img src={heroImage} width="100%" alt='paddleboat'/>
            </figure>
            <div className='hero-content'>
                <h2>
                    Kayaking is  <br /> great escape <br /> anytime
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra eros eget augue accumsan blandit. Proin lacinia lectus risus, ac pellentesque magna efficitur ac. Fusce venenatis fermentum tellus.
                </p> 
                <button className='btn'>
                    Login Kayak
                </button>
            </div>
        </article>
        </div>
    )
}