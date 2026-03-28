import backgroundImage from "/assets/cta/cta_bg.png"


const DefineYourSpace = () => {
    return (
        <section style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover bg-center bg-no-repeat aspect-1920/1077">
            <div className="max-w-480 px-4 md:px-8 lg:px-20 xl:px-28  uppercase w-full font-playfair text-3xl md:text-4xl lg:text-8xl leading-[150%] py-[121px]">
                <h2 className="text-white text-left">Define your space</h2>
                <h2 className="text-white text-right">Elevate Every Moment</h2>
            </div>
        </section>
    )
}

export default DefineYourSpace;
