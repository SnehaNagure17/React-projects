export default function HeroSection() {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="Shopping">
                    <p>Also Available On</p>
                </div>

                <div className="brand-icons">
                    <img src="./src/assets/amazon.png" alt="amazon-logo"></img>
                    <img src="./src/assets/flipkart.png" alt="amazon-logo"></img>

                </div>
            </div>
            <div className="hero-image">
                <img src="./src/assets/nike-shoe.jpg" alt="shoe-image"></img>

            </div>
        </main>
    )
}