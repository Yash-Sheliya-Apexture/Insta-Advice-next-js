import { GoArrowRight } from "react-icons/go";

const OfferSection = () => {
  return (
    <section className="Banner py-12 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row rounded-xl">
          {/* Left Column (Text Content) */}
          <div className="lg:w-1/2 text-left p-12 bg-gradient-to-r from-light-royal-blue from-0% via-purple-heart via-54% to-amaranth to-100% rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl text-white">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-color">
              Our Approach
            </h2>
            <p className=" mt-6 text-lg">
              [ Website Name]'s reviews come from a dedicated team of Instagram
              growth fanatics: strategists, marketers, and tech experts. We
              exactly test and analyze the latest tools and techniques, going
              deep into each feature and its real-world value, as well as user
              feedback.
            </p>
            <p className=" mt-6 text-lg">
              We focus on cutting through the noise and providing the most
              accurate, reliable assessments. With a transparent approach, our
              platform empowers you to see the full scope of the growth service
              you are researching. We combine both our insights with real user
              feedback.
            </p>
            <p className=" mt-6 text-lg">
              Our goal is to help you confidently navigate Instagram's
              complexities. By combining our in-depth evaluations with real
              experiences, we are here to help you make the right choices and
              achieve your goals.
            </p>

            {/* <div className="mt-6">
              <div className="flex items-center justify-between cursor-pointer my-5 group">
                <p className="flex-1 font-medium">
                  1. We Put Ascend Viral Against The Top 50 Growth Services
                </p>
                <span className="w-7 h-7 p-1 rounded-full bg-white/50 group-hover:bg-card-color flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-0">
                  <GoArrowRight className="w-6 h-6 transform -rotate-45  transition-transform duration-500 group-hover:rotate-0 " />
                </span>
              </div>
              <hr />

              <div className="flex items-center justify-between cursor-pointer my-5 group">
                <p className="flex-1 font-medium">
                  2. How To Detect Fake Instagram Growth Services
                </p>
                <span className="w-7 h-7 p-1 rounded-full bg-white/50 group-hover:bg-card-color flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-0">
                  <GoArrowRight className="w-6 h-6 transform -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                </span>
              </div>
              <hr />

              <div className="flex items-center justify-between cursor-pointer my-5 group">
                <p className="flex-1 font-medium">
                  3. Watch Our 3 Hour Instagram Growth Course For Free
                </p>
                <span className="w-7 h-7 p-1 rounded-full bg-white/50 group-hover:bg-card-color flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-0">
                  <GoArrowRight className="w-6 h-6 transform -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                </span>
              </div>
            </div> */}
          </div>
          {/* Right Column (Image and Quote) */}
          <div className="lg:w-1/2 ">
            <div className="relative h-full">
              <img
                src="/images/banner.jpg" // Ensure the image is in the "public/images" folder
                alt="Ethan Adams"
                className="w-full h-full object-cover object-center rounded-tr-none lg:rounded-tr-xl rounded-bl-xl lg:rounded-bl-none rounded-br-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
