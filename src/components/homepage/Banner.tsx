import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg"; // or your book image path

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 my-6">
      <div className="bg-[#131313]/5 rounded-3xl p-8 lg:p-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Section */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#131313] leading-tight lg:leading-[1.2]">
            Books to freshen up <br className="hidden sm:inline" />
            your bookshelf
          </h1>
          <div>
            <button className="btn border-none bg-[#23BE0A] hover:bg-[#1fa109] text-white font-semibold text-lg px-7 py-3 h-auto rounded-xl shadow-md transition-transform hover:scale-105">
              View The List
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={bannerImg}
            alt="The Dating Playbook For Men Book Cover"
            width={318}
            height={450}
            className="w-auto max-h-[380px] lg:max-h-[420px] object-contain drop-shadow-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;