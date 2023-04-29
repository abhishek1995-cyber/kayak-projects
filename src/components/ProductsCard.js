import paddleboatimg from '../assets/paddleboat.jpg';
import capimg from '../assets/cap.jpg';
import bagimg from '../assets/bag.jpg';

export default function ProductsCard(){
    return (
        <div className='flex'>
        <div className='card'>
            <figure>
                <img src={paddleboatimg} width="100%" height="100%" alt='paddleboat'/>
            </figure>
            <div className='price flex'>
                <strong>
                    PADDLE BOARD
                </strong>
                <strong className='clr-green'>
                    $599.00
                </strong>
            </div>
            <h3>
                10'6 commodo Inflattable Stand Up Paddle Board
            </h3>
            <div className='flex' >
                <div className='color flex'>
                    <div>
                    <p>
                        Colors
                    </p>
                    </div>
                        <div className='flex'>
                            <div className='color-box clr-aqua'></div>
                            <div className='color-box clr-orange'></div>
                            <div className='color-box clr-aquamarine'></div>
                            <div className='color-box clr-orangered'></div>
                        </div>
                </div>
                <i className="fa-solid fa-circle-up"></i>
            </div>
        </div>
        <div className='card'>
            <figure>
                <img src={bagimg} width="100%" height="100%" alt='bag'/>
            </figure>
            <div className='price flex'>
                <strong>
                    PADDLE BOARD
                </strong>
                <strong className='clr-green'>
                    $220.00
                </strong>
            </div>
            <h3>
                Inflattable Stand Up Paddle Board
            </h3>
            <div className='flex' >
                <div className='color flex'>
                    <div>
                    <p>
                        Colors
                    </p>
                    </div>
                        <div className='flex'>
                            <div className='color-box clr-aqua'></div>
                            <div className='color-box clr-orange'></div>
                            <div className='color-box clr-aquamarine'></div>
                            <div className='color-box clr-orangered'></div>
                        </div>
                </div>
                <i className="fa-solid fa-circle-up"></i>
            </div>
        </div>
        <div className='card'>
            <figure>
                <img src={capimg} width="100%" height="100%" alt='cap'/>
            </figure>
            <div className='price flex'>
                <strong>
                    PADDLE BOARD
                </strong>
                <strong className='clr-green'>
                    $70.00
                </strong>
            </div>
            <h3>
                Inflattable Stand Up Paddle Board
            </h3>
            <div className='flex' >
                <div className='color flex'>
                    <div>
                    <p>
                        Colors
                    </p>
                    </div>
                        <div className='flex'>
                            <div className='color-box clr-aqua'></div>
                            <div className='color-box clr-orange'></div>
                            <div className='color-box clr-aquamarine'></div>
                            <div className='color-box clr-orangered'></div>
                        </div>
                </div>
                <i className="fa-solid fa-circle-up"></i>
            </div>
        </div>
        </div>
    )
}