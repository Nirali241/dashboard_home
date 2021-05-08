import React from 'react'
import './Invest.css'

function Invest() {
    return (
        <>
            <div className="invest" >
                <div className="row">
                    <div className="col">
                    <div className="card" width="100vw">
                        <div className="card-body">
                            <h5 className="card-title"><strong>Investmnet Option</strong></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Invested in 6 Option</h6>
                            
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-auto">
                        <div className="card-body">
                            <p className="card-title">Short Term Bond</p>
                            <p className="card-text text-success" >$13.49  +1.50(+12.44%)</p>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="card-body">
                            <p className="card-title">Total Bond</p>
                            <p className="card-text text-success" >$11.49  +1(+1.4%)</p>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="card-body">
                            <p className="card-title">Moderate Growth</p>
                            <p className="card-text text-danger" >$1.49  -2(-0.4%)</p>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="card-body">
                            <p className="card-title">Total Equity</p>
                            <p className="card-text text-success" >$3.4  +0.4(+0.4%)</p>
                        </div>
                    </div>
                    <div className="col-md-auto">
                    <div className="card-body">
                            <p className="card-title">European Stock</p>
                            <p className="card-text text-danger" >$0.9  -0.5(-0.1%)</p>
                        </div>
                    </div>
                    <div className="col-md-auto">
                    <div className="card-body">
                            <p className="card-title">Money Market</p>
                            <p className="card-text text-success" >$3.9  +1(+2%)</p>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Invest
