import cardImage from "@/images/cardImage.jpg";
import Image from "next/image";
import IconImages from "./IconImages";
import startBucks from "@/icons/starBucks.jpg";
import pizzaHut from "@/icons/pizzaHut.jpg";
import basket from "@/icons/basket.jpg";
import bag from "@/icons/bag.jpg";
import flight from "@/icons/flight.jpg";
import flipkart from "@/icons/flipkart.jpg";
import myntra from "@/icons/myntra.jpg";
import nykaa from "@/icons/nykaa.jpg";
import taj from "@/icons/Taj.jpg";
import uber from "@/icons/uber.jpg";
import video from "@/icons/video.jpg";

export default function IntroSection() {
  return (
    <div className="flex flex-wrap gap-1 max-sm:gap-20 justify-between md:py-28 md:px-20 max-sm:p-4 max-sm:mb-16">
      <div className="md:py-6 md:w-[50%] max-sm:text-center">
        <h2 className="text-5xl max-sm:text-3xl font-semibold mb-2">
          Build a Credit Card
        </h2>
        <h2 className="text-5xl max-sm:text-2xl font-semibold mb-6">
          That is Definitely Yours
        </h2>
        <p className="text-xl max-sm:text-lg font-medium mb-8">
          With the OneSync Credit Card you can customise your card the way you
          want
        </p>
        <button
          type="button"
          className="bg-buttonColor text-white font-medium rounded-3xl text-md px-5 py-3 text-center "
        >
          Get started
        </button>
      </div>
      <div className="max-sm:px-8">
        <div className="relative">
          <Image
            src={cardImage}
            alt="CreditCardImage"
            width={500}
            height={220}
          />
          <IconImages
            image={startBucks}
            padding={"12px"}
            topPosition={"-48px"}
            LeftPosition={"45%"}
          />
          <IconImages
            image={pizzaHut}
            padding={"32px 15px"}
            topPosition={"-55px"}
            LeftPosition={"75%"}
          />

          <IconImages
            image={basket}
            topPosition={"-15px"}
            rightPosition={"-50px"}
          />
          <div className="absolute bg-white rounded-full top-[28%]  max-sm:top-[20%] py-[40px] px-[35px] right-[-50px] max-sm:px-[15px] max-sm:py-[15px]">
            <Image
              src={taj}
              alt="Card"
              width={40}
              height={40}
              className="object-cover animate-bounce"
            />
          </div>

          <div className="absolute bg-white rounded-full bottom-[15px] right-[-40px] ">
            <Image
              src={bag}
              alt="Card"
              width={30}
              height={30}
              className="object-cover animate-bounce"
            />
          </div>

          <IconImages
            image={flipkart}
            padding={"30px 16px"}
            bottomPosition={"-55px"}
            LeftPosition={"80%"}
          />
          <div className="absolute bg-white rounded-full px-[20px] py-[30px]  bottom-[-55px] left-[6%] max-sm:bottom-[-65px]">
            <Image
              src={uber}
              alt="Card"
              width={30}
              height={30}
              className="object-cover animate-bounce"
            />
          </div>
          <IconImages
            image={flight}
            LeftPosition={"-40px"}
            bottomPosition={"-2%"}
          />
          <div className="absolute bg-white rounded-full top-[35%]  max-sm:top-[35%] max-sm:left-[-46px]  py-[40px] px-[35px] left-[-66px] max-sm:px-[15px] max-sm:py-[15px]">
            <Image
              src={myntra}
              alt="Card"
              width={38}
              height={38}
              className="object-cover animate-bounce"
            />
          </div>

          <div className="absolute bg-white rounded-full top-[15px] left-[-40px] ">
            <Image
              src={video}
              alt="Card"
              width={30}
              height={30}
              className="object-cover animate-bounce"
            />
          </div>
          <IconImages
            image={nykaa}
            padding={"25px"}
            topPosition={"-40px"}
            LeftPosition={"8%"}
          />
        </div>
      </div>
    </div>
  );
}

//https://gist.github.com/Mif2006/5ad7a061259c32b89daf8098f2830b95
