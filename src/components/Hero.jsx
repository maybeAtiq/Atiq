import tag from "/assets/tag.svg"
import face from "/assets/face.svg"
import face2 from "/assets/face2.svg"

const Hero = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center space-y-16">
            <div className="rounded-[30px] overflow-hidden w-full">
                {/* Mobile */}
                <img
                    src={face2}
                    className="block md:hidden w-full"
                />

                {/* Desktop */}
                <img
                    src={face}
                    className="hidden md:block w-full"
                />
            </div>
            <div className="text-center gap-2.5 flex flex-col">
                <div className="flex flex-col items-center text-gray-700">
                    <p>follow <a href="https://www.instagram.com/shoptenliner/" target="_blank" rel="noopener noreferrer" className="text-gray-400">@shoptenliner</a> on instagram.</p>

                    <div className="">
                        <img
                            src={tag}
                            className="w-6 h-6 inline-block mr-15"
                        />
                    </div>
                </div>
                <h1 className="text-4xl md:text-9xl font-black ">Coming <span className="text-[#585050]">sss</span>oon.</h1>
            </div>
        </div>
    );
}

export default Hero;