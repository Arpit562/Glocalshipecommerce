import React, { useState, useEffect } from "react";

const OfferSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set countdown to 3 days from now
        const countdownTo = new Date().getTime() + 1000 * 60 * 60 * 24 * 3; // 3 days

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownTo - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-4 py-16 bg-[#f4f2e9] text-black font-sans sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Product Image Grid */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px] overflow-hidden rounded-2xl shadow-xl">
                    {/* Main Hero Image (Spans 2 rows) */}
                    <div className="relative col-span-1 row-span-2 group rounded-xl overflow-hidden border border-gray-200"> {/* Changed border color */}
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg"
                            alt="Handcrafted"
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-md"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-1 md:text-3xl">Premium Handmade Collection</h3>
                            <p className="text-md text-amber-100 mb-3 sm:text-lg">Crafted with passion using ancient techniques</p>
                            <span className="inline-block bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                                Limited Stock Available
                            </span>
                        </div>
                    </div>

                    {/* Small Image 1 (Top Right) */}
                    <div className="relative col-span-1 row-span-1 group rounded-xl overflow-hidden shadow-lg border border-gray-200"> {/* Changed border color */}
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg"
                            alt="Handcrafted"
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-md"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center">
                            <span className="text-xs font-semibold text-amber-300">Artisan's Touch</span>
                        </div>
                    </div>

                    {/* Small Image 2 (Bottom Right) */}
                    <div className="relative col-span-1 row-span-1 group rounded-xl overflow-hidden shadow-lg border border-gray-200"> {/* Changed border color */}
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg"
                            alt="Handcrafted"
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-md"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center">
                            <span className="text-xs font-semibold text-amber-300">Unique Craftsmanship</span>
                        </div>
                    </div>
                </div>

                {/* Right: Countdown Box */}
                <div className="p-8 flex flex-col justify-center items-center space-y-8 border border-amber-400/50 rounded-2xl bg-white/70 backdrop-blur-sm lg:p-10 text-gray-800"> {/* Changed background, text color, and border */}
                    <div className="text-center space-y-4">
                        <span className="text-amber-600 font-medium tracking-wider text-sm sm:text-base">FLASH SALE</span> {/* Adjusted amber shade for contrast */}
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Summer Collection</h2> {/* Darker text for contrast */}
                        <p className="text-gray-700 max-w-md text-sm sm:text-base"> {/* Adjusted text color for contrast */}
                            Don't miss our exclusive limited-time offer on premium handmade products.
                            Every piece is crafted with care and attention to detail.
                        </p>
                    </div>

                    <div className="w-full">
                        <h3 className="text-lg font-semibold text-amber-600 text-center mb-4 sm:text-xl">Deal Ends In</h3> {/* Adjusted amber shade */}

                        <div className="grid grid-cols-4 gap-3 text-center sm:gap-4">
                            {/* Days */}
                            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 sm:p-4"> {/* Lightened background and border */}
                                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1 sm:mb-2">Days</p> {/* Darkened text */}
                                <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl"> {/* Darkened text */}
                                    {String(timeLeft.days).padStart(2, "0")}
                                </p>
                            </div>

                            {/* Hours */}
                            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 sm:p-4">
                                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1 sm:mb-2">Hours</p>
                                <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    {String(timeLeft.hours).padStart(2, "0")}
                                </p>
                            </div>

                            {/* Minutes */}
                            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 sm:p-4">
                                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1 sm:mb-2">Minutes</p>
                                <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    {String(timeLeft.minutes).padStart(2, "0")}
                                </p>
                            </div>

                            {/* Seconds */}
                            <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 sm:p-4">
                                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1 sm:mb-2">Seconds</p>
                                <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    {String(timeLeft.seconds).padStart(2, "0")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center space-y-4 pt-4">
                        <p className="text-sm text-gray-700"> {/* Darkened text */}
                            <span className="line-through text-gray-500 mr-2">₹16,699.16</span> {/* Adjusted text for contrast */}
                            <span className="text-2xl font-bold text-amber-600">₹12,524.16</span> {/* Adjusted amber shade */}
                            <span className="ml-2 text-green-600 text-sm">(25% OFF)</span> {/* Adjusted green shade */}
                        </p>
                        <button className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-md text-base font-semibold hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 sm:px-8 sm:py-3 sm:text-lg">
                            Grab the Deal Now
                        </button>
                        <p className="text-xs text-gray-600 mt-2">Only 12 items left at this price!</p> {/* Darkened text */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;