import SelectDropdown from "./SelectDropdown";

export default function CustomizeCardSection() {
  return (
    <div className=" bg-purpleBg h-[350px] w-full text-white max-sm:flex-col">
      <div className="md:p-12 max-sm:p-4 flex justify-center items-center h-full">
        <div className="flex flex-col justify-center md:w-[50%]">
          <h2 className="text-4xl max-sm:text-2xl font-normal mb-1 ">
            The Freedom to Create
          </h2>
          <h2 className="text-4xl max-sm:text-xl font-normal mb-6">
            The Credit Card You Want
          </h2>
          <p className="text-md md:hidden mb-6">
            Build your own Credit Card that fits in your day to day
            lifestyle.First, choose your rewards and then select your card
            design.
          </p>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-white md:hidden"
          >
            Check if the card is available in your city
          </label>
          <div className="md:hidden flex justify-between gap-2 ">
            <div className="w-full">
              <SelectDropdown />
            </div>
            <button
              type="button"
              className="bg-[#4E3F6B] rounded-3xl text-white  font-medium text-sm px-4 py-2 text-center "
            >
              Go
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center md:w-[50%] max-sm:hidden">
          <p className="text-md  mb-4">
            That&apos;s why it comes with benefits & rewards chosen by you.
            Available in multiple designs, your card comes in a style selected
            by you. You can come back each year, to edit your benefits or update
            your style
          </p>
          <p className="text-md mb-4">
            Copy Your OneSync Credit Card stays true to you, year after year.
            It&apos;s the only card you&apos;ll ever need.
          </p>

          <a className="underline text-lg font-normal">Get Started &gt;</a>
        </div>
      </div>
    </div>
  );
}
