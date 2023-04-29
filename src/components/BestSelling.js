import ProductsCard from "./ProductsCard"

export default function BestSelling(){
    return (
        <div className="container padding best-selling">
            <div className="flex">
                <h2>Our Best Selling <br /> Products</h2>
                <nav className="nav-menu">
                    <ul >
                        <button className="btn" >
                            All Products
                        </button>
                        <li>
                            padle Board
                        </li>
                        <li>
                            Gear
                        </li>
                        <li>
                            Cloths
                        </li>
                        <li>
                            Accesories
                        </li>
                    </ul>
                </nav>
            </div>
         <ProductsCard />
        </div>
    )
}