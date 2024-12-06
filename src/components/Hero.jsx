import hero from "../assets/Group 77.png"

function Hero(){
    return(
        <>
            <div className="main-hero">
                <div className="hero">
                    <img src={hero} className="hero-img" />
                </div>

                <h1 className="hero-header">Memorable Online Experiences</h1>
                <h4 className="hero-header body">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home. Join unique, interactive experiences designed by one-of-a-kind hosts. Explore cozy stays, exciting adventures, and curated experiences tailored just for you—all from the comfort of your home.</h4>
                <h4 className="hero-tagline">Belong Anywhere</h4>
            </div>
           
        </>
    )
}

export default Hero;