export const Home = () => {
    return(
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <h3>DestinyDuo</h3>
                        <p>Hello everyone</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quibusdam perspiciatis odit dolor sunt, quas quia nemo officia beatae id! Aperiam nemo commodi architecto provident nobis tempora id cupiditate, voluptatibus necessitatibus aliquam at, earum minima beatae minus? Totam quibusdam exercitationem illum pariatur fugiat quod?</p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Us</button>
                            </a>
                            
                            <a href="/services">
                                <button className="btn">Learn more</button>
                            </a>
                        </div>
                    </div>

                    <a href="/findfriend">
                            <button className="btn btn-primary" type="button">Find your friend</button>
                        </a>

                    {/* hero images */}
                    <div className="hero-image">
                        <img src="/images/home.jpg" alt="let's come together"
                        width="500"
                        height="500" />
                    </div>

                </div>
            </section>
        </main>
        </>
    )

}