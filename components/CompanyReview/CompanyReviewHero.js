import React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaLinkedin, FaReddit } from "react-icons/fa";

const CompanyReviewHero = ({ data }) => {
    if (!data) return null;

    const { title, acf, _embedded, slug } = data;

    const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
    const heroShotDescription = acf?.hero_shot_description;

    // Split the comma-separated string of image URLs
    const awardsImages = acf?.awards_gallery?.split(",") || [];
    const hasAwards = awardsImages.some(img => img.trim() !== "");

    const currentPageUrl = typeof window !== 'undefined' ? window.location.href : "";
    const shareUrl = `/company/${slug}`;

    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentPageUrl)}&text=${encodeURIComponent(`Check out this review for ${title?.rendered}`)}`;
     const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl)}`;
    const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentPageUrl)}&title=${encodeURIComponent(`Check out this review for ${title?.rendered}`)}`;
     const redditShareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(currentPageUrl)}&title=${encodeURIComponent(`Check out this review for ${title?.rendered}`)}`;

    return (
        <>
            <div className="hero-wrap ">
                <div className="flex items-center justify-between pb-36 lg:flex-nowrap flex-wrap">
                    <div className="lg:w-3/4 w-full">
                        <div className="flex xl:gap-10 gap-3 flex-col">
                            <div className="flex items-center gap-4">
                                {imageUrl && (
                                    <div className="relative md:w-32 md:h-32 min-w-24 min-h-24 p-3 bg-white shadow-md border border-gray-300 rounded-lg">
                                        <Image
                                            src={imageUrl}
                                            alt="Company Logo"
                                            fill
                                            className="object-contain p-3"
                                            sizes="(max-width: 768px) 100vw, 300px"
                                        />
                                    </div>
                                )}
                                <div className="heading-wrapper">
                                    <h2 className="mb-2 md:text-3xl text-2xl font-bold text-gray-800">
                                        {title?.rendered} Review
                                    </h2>
                                    <p className="md:text-xl text-base  text-gray-600">
                                        Expert and User Insights by {title?.rendered} Customers
                                    </p>
                                </div>
                            </div>
                            <div className="hero-shot-description md:block hidden">
                                <p className="md:text-lg text-base">{heroShotDescription}</p>
                            </div>
                        </div>
                    </div>
                     {hasAwards && (
                        <div className="lg:w-1/4 w-full badges-wrap md:block hidden">
                            <div className="flex items-center justify-end">
                                {awardsImages.map((award, index) => (
                                      award.trim() && (
                                          <Image
                                              key={index}
                                              src={award.trim()}
                                              alt={`Award ${index + 1}`}
                                              width={50}
                                              height={50}
                                              className="-ml-2"
                                          />
                                      )
                                ))}
                            </div>
                            <div className="flex items-center justify-end mt-6 ">
                                <div className="order-1 text-gray-600 lg:order-2 lg:mt-24">
                                    <h1 className='text-[#16181d66] text-xl font-medium'>Shere</h1>
                                    <div className='flex mt-2 space-x-2'>
                                         <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer"  className="hover:text-[#1da1f2] hover:bg-gray-200 flex items-center justify-center rounded-lg p-3">
                                            <FaTwitter className='text-xl' />
                                        </a>
                                        <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] hover:bg-gray-200 flex items-center justify-center rounded-lg p-3">
                                            <FaFacebook className='text-xl' />
                                        </a>
                                        <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] hover:bg-gray-200 flex items-center justify-center rounded-lg p-3">
                                            <FaLinkedin className='text-xl' />
                                        </a>
                                        <a href={redditShareUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4500] hover:bg-gray-200 flex items-center justify-center rounded-lg p-3">
                                            <FaReddit className='text-xl' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CompanyReviewHero;