import React from 'react'
import Bexim from '../../src/images/logobanner/Bexim.png'
import Lighton from '../../src/images/logobanner/Lighton.png'
import Dismis from '../../src/images/logobanner/Dismis.png'
import Rosimo from '../../src/images/logobanner/Rosimo.png'
import Dallas from '../../src/images/logobanner/Dallas.png'

export default function LoggoBanner() {
    return (
       <div className="container mt-5 mb-5 d-none d-md-block">
           <div className="row">
               <div className="d-flex justify-content-between ">
                    <div className="col-md-2 mr-4">
                        <img className="img-fluid" src={Bexim} />
                    </div>
                    <div className="col-2 mr-4">
                        <img className="img-fluid" src={Dismis} />
                    </div>
                    <div className="col-2 mr-4">
                        <img className="img-fluid" src={Rosimo} />
                    </div>
                    <div className="col-2 mr-4">
                        <img className="img-fluid" src={Lighton} />
                    </div>
                    <div className="col-2">
                        <img className="img-fluid" src={Dallas} />
                    </div>
               </div>
           </div>

       </div>
    )
}
