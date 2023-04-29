import imgone from '../assets/image1.jpeg';
import imgtwo from '../assets/image2.jpeg';
import imgthree from '../assets/image3.jpeg';

export default function Blog(){
    return (
        <div className="container blog padding">
        <div className="flex ">
            <div>
        <h2>Blog & Article</h2>
        <p>
            Read our exclusive Blogs & article based on kayakings and fun tour 
        </p>
            </div>
            <nav>
                <p>See All</p>
            </nav>
        </div>
        <div className='flex blog-card'>
        <figure>
            <img src={imgone} alt="paddle-boat" width="100%" />
        </figure>
        <figure>
            <img src={imgtwo} alt="paddle-boat" width="100%"/>
        </figure>
        <figure>
            <img src={imgthree} alt="paddle-boat" width="100%"/>
        </figure>
        </div>
        </div>
    )
}