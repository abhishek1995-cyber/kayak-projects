import BestSelling from "./BestSelling";
import Hero from "./Hero";
import "../style.scss";
import Training from "./Training";
import Blog from "./Blog";


export default function App(){
    return (
        <>
        <Hero />
        <div className="body">
        <BestSelling />
        </div>
        <Training />
        <Blog />
        </>
    )
}