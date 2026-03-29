const SingleCardWithImage = ({ item = {} }) => {
    return (
        <div className="w-full flex flex-col gap-3 cursor-pointer group/item">
            <div className="relative aspect-3/4 w-full bg-gray-100 rounded-2xl overflow-hidden transition-transform duration-300 group-hover/item:scale-[1.02]">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />

                {/* Product Count Overlay (Only if productCount exists) */}
                {item.productCount && (
                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md">
                        <span className="text-[10px] font-bold text-gray-800">{item.productCount} products</span>
                    </div>
                )}

                {/* Pagination Dots Mockup (as seen in screenshot for some items) */}
                {item.showDots && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 bg-black/20 backdrop-blur-sm rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
                    </div>
                )}
            </div>
            <h3 className="text-sm font-medium text-gray-600 transition-colors group-hover/item:text-gray-900 w-full text-left">
                {item.title}
            </h3>
        </div>
    )
}

export default SingleCardWithImage;