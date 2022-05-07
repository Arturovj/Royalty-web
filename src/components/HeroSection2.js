import "./HeroSection2.scss";

function HeroSection2() {
  return (
    <div className="marginHeroSection2">
      <div className="bodyHeroSection2">
        <div className="header2">
          <h1 className="header-title">Best way to share royalties</h1>
          <h2 className="header-subtitle">Powered by Royalty</h2>

          <p className="header-paragraph">
            We are a platform where we want artists from all over the world to
            be able to buy and sell their musical projects
          </p>
        </div>

        <section className="cards-herosection2">
          <div className="card-supervisor">
            <h1 className="card-title">Create a community</h1>
            <p className="card-paragraph">
              Create a strong community, meet new friends and co-workers.
            </p>
            <div className="card-image">
              <i className="fas fa-users favicon"></i>
            </div>
          </div>

          <div className="card-team-builder">
            <h1 className="card-title">Share your music</h1>
            <p className="card-paragraph">
              Share your music with other people, show your worth and succeed in
              music.
            </p>
            <div className="card-image">
              <i className="fas fa-compact-disc favicon"></i>
            </div>
          </div>

          <div className="card-karma">
            <h1 className="card-title">Safe legal transactions</h1>
            <p className="card-paragraph">
              All transactions are guaranteed by our legal department. You have
              nothing to worry about.
            </p>
            <div className="card-image">
              <i className="fas fa-balance-scale favicon"></i>
            </div>
          </div>

          <div className="card-calculator">
            <h1 className="card-title">Crypto & SmartContracts</h1>
            <p className="card-paragraph">
              We use web3 and blockchain / smartcontracts technology to
              facilitate the transmission of contracts
            </p>
            <div className="card-image">
              <i className="fab fa-bitcoin favicon"></i>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection2;
