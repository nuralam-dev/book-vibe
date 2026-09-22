import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/bannerimg-02.png"

const Banner = () => {
    return (
        <div>
            {/* text section */}
            <div>
                <h1>Books to freshen up your bookshelf</h1>
                <button>View The List</button>
            </div>
            {/* img section */}
            <div>
                <Image src={bannerImg}></Image>
            </div>
        </div>
    );
};

export default Banner;