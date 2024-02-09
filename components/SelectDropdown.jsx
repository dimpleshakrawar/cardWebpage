export default function SelectDropdown() {
  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:border-blue-500 block w-full p-2.5"
      >
        <option defaultValue>Select city</option>
        <option value="US" className="hover:bg-[#4E3F6B]">
          United States
        </option>
        <option value="CA" className="hover:bg-[#4E3F6B]">
          Canada
        </option>
        <option value="FR" className="hover:bg-[#4E3F6B]">
          France
        </option>
        <option value="DE" className="hover:bg-[#4E3F6B]">
          Germany
        </option>
      </select>
    </>
  );
}
