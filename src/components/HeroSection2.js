import './HeroSection2.scss'

function HeroSection2() {
    return(
        <div className='marginHeroSection2'>
        <div className='bodyHeroSection2'>
        <div className="header2">
          <h1 className="header-title">Best way to share royalties</h1>
          <h2 className="header-subtitle">Powered by Royalty</h2>
      
          <p className="header-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      
        <section className="cards-herosection2">
          <div className="card-supervisor">
            <h1 className="card-title">Create a community</h1>
            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="card-image">
            <i className="fas fa-users favicon"></i>
            </div>
          </div>
      
          <div className="card-team-builder">
            <h1 className="card-title">Share your music</h1>
            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="card-image">
            <i className="fas fa-compact-disc favicon"></i>
            </div>
          </div>
          
          <div className="card-karma">
            <h1 className="card-title">Safe legal transactions</h1>
            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="card-image">
            <i className="fas fa-balance-scale favicon"></i>
            </div>
          </div>
      
          <div className="card-calculator">
            <h1 className="card-title">Crypto & SmartContracts</h1>
            <p className="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="card-image">
            <i className="fab fa-bitcoin favicon"></i>
            </div>
          </div>
        </section>
        
       
      </div>
      </div>
 
    )
}

export default HeroSection2