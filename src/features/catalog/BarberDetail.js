import Toolbar from "../shared/Toolbar";

function BarberDetail() {
  return (
    <div className="flex flex-col h-screen w-screen	overflow-y-scroll">
      <Toolbar email="mymail@gmail.com" />

      <div className="flex gap-20 p-5 flex-center items-start">
        <div className="w-auto w-fit txt-sm font-bold text-gray-600 block">
          <p>Here you can view George's detail</p>

          <p>Lastname: doe</p>
          <p>Conact: john@gmail.com</p>
          <p>Address: Georgia</p>
          <p>Price: 100$</p>
          <button className=" w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">
            Order
          </button>
          <ul>
            Reviews:
            <li>
              <p>DUMMY TEXT</p>
              <p>STAR 5/10</p>
            </li>
          </ul>
        </div>
        <form>
          <div className="group">
            <label for="customRange2" class="form-label">
              Choose rate
            </label>
            <input
              type="range"
              class="
                        form-range
                        w-full
                        h-6
                        p-0
                        bg-transparent
                        focus:outline-none focus:ring-0 focus:shadow-none
                        "
              min="0"
              max="5"
              id="customRange2"
            />
          </div>
          <div className="group">
            <label
              for="exampleFormControlTextarea1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Example textarea
            </label>
            <textarea
              class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="mt-2 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BarberDetail;
