import React,{useEffect} from 'react'
import 'assets/css/About.css'

function Blog() {


    useEffect(()=>
    {
        let counters = document.querySelectorAll(".h1")
        counters.forEach(e=>
            {
                e.innerText = '0'
    
                const upCount = ()=>
                {
                    const target = +e.getAttribute('data-target')
                    const c = +e.innerText;
                    const increment = target/200;
                    if (c<target)
                    {
                        e.innerText=`${Math.ceil(c+increment)}`
                        setTimeout(upCount,50)
                    }
                }
    
                upCount()
    
            })   
    },[])

    return (
        <div className='blog'>
            <div className="blog-first">
                    <h1>We are Grand Car Rental Best Car Rental WordPress Theme </h1>
                    <p>Car rental, limousine, and car hire. All in one service.</p>
            </div>
            <div className="adventure">
                <div className="center-adv">
                    <h1>This adventure isn’t about change but it seems to be an inevitability.</h1>
                    <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.</p>
                    <div className="timer">
                        <div className="trips">
                            <div className="t-p trip" >
                                <h1 className='h1' data-target='1312'></h1>
                                <p>Trips</p>
                            </div>
                            <div className="t-p happy">
                                <h1 className='h1' data-target='1369'></h1>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
