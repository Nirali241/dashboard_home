import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
        <div className="home">
            <div className="row opacity-10" >
                <div className="col-sm-12 ">
                <div className="card " width= "100vw" >
                    <div className="card-body "  >
                        <h4 className="card-title ">The Staton Children's Education Funds</h4>
                            <p className="card-text">The Standard vcep fund</p>
                    </div>
                </div>                   
                </div>
            </div>
            <div className="row"  width = "100vw">
                <div className="col">
                    
                        <div className="card-body">
                            <p className="card-title">Available Balance</p>
                            <h5 className="card-text text-info" >$500,000</h5>
                        </div>
                
                </div>
                <div className="col">
                
                        <div className="card-body">
                            <p className="card-title">Current Balance</p>
                            <h5 className="card-text text-info" >$536,000</h5>
                        </div>
                
                </div>
                <div className="col">
                
                        <div className="card-body">
                            <p className="card-title">Grant Made</p>
                            <h5 className="card-text text-info">$139,000</h5>
                        </div>
                    
                </div>
            </div>
            <div className="row" witdh="100vw">
                <div className="col-sm-1"></div>
                <div className="col">
               
                        <div className="card-body">
                            <h4 className="card-title">Legacy Journey</h4>
                            <p className="card-text">Balance overtime</p>
                        </div>
                    
                </div>
                <div className="col-sm-3"></div>
                <div className="col">
            
                        <div className="card-body">
                            <h4 className="card-title">Activity</h4>
                            <p className="card-text">Details</p>
                        </div>
                    
                </div>
            </div>
            <div className="row" witdh="100vw">
  
                <div className="col-sm-1"></div>
                <div className="col">
                    <div class="card" >
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpV2Rhw0Nu0Ax1liCvmNbi1hS41valK2Vh5H2_MW-5jb2O83jxO0f65YvHl5A70eo2w0&usqp=CAU" alt="" height="250px" width="50px" />
                     <div class="card-body">
                        
                     </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
                <div className="col">
                    
                <ul class="nav flex-column">
                
                    <li class="nav-item">
                            <h5 className="card-title text-secondary">$500000</h5>
                            <p className="card-text text-secondary">Wire Transfer </p>
                    </li>
                    <li class="nav-item">
                            <h5 className="card-title text-secondary">$563533</h5>
                            <p className="card-text text-secondary">Balance</p>
                    </li>
                    <li class="nav-item">
                            <h5 className="card-title text-secondary">Record and Exchange</h5>
                            <p className="card-text text-secondary">Grand Made</p>
                    </li>
                    <li class="nav-item">
                            <h5 className="card-title text-secondary">$500000</h5>
                            <p className="card-text text-secondary">Data details</p>
                    </li>
                    </ul>
                </div>
            </div>  
            
            
            </div>  
        </>
    )
}

export default Home
