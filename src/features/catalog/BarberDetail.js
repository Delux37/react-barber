import Toolbar from "../shared/Toolbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import * as DbActions from "../../db/users";



function BarberDetail() {
  const rate = {
      minRate: 0,
      maxRate: 5
  };
  const initialValues = { 
      rate: 1,
      description: ''
  }
  const {id} = useParams();
  const navigate = useNavigate();
  const [barber, setBarber] = useState({})
  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (e) => {
      const { name, value } = e.target
      setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
      const {rate, description} = formValues;
      e.preventDefault();
      const val = DbActions.addBarberRate(barber.id, { rate, description })
      if(val) {
          navigate('/dashboard');
          setFormValues(initialValues);
      }

      // handle errror
  }

  useEffect(() => {
    try {
        const parsed = parseInt(id);
        if(isNaN(parsed) || typeof parsed !== 'number')
            throw new Error('Invalid param');

        const dbBarber = DbActions.fetchBarberDetail(id);
        
        if(!dbBarber)
            throw new Error('Invalid param');
            
        setBarber(dbBarber);

    } catch {
        navigate("/dashboard")
    }


  }, [])

  return (
    <div className="flex flex-col h-screen w-screen	overflow-y-scroll  bg-catalog-bground">
      <Toolbar email="mymail@gmail.com" />
      <div className="flex gap-20 p-5 flex-center items-start bg-white mx-auto my-10 rounded">
        <div className="w-auto w-fit txt-sm font-bold text-gray-600 block">
          <p>Here you can view {barber.firstName}'s detail</p>

          <p>Lastname: {barber.lastName}</p>
          <p>Conact: {barber.email}</p>
          <p>Address: {barber.address}</p>
          <p>Price: {barber.price}$</p>
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
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label htmlFor="customRange2" className="form-label">
              Choose rate {formValues.rate} / {rate.maxRate}
            </label>
            <input
              type="range"
              className="
                        form-range
                        w-full
                        h-6
                        p-0
                        bg-transparent
                        focus:outline-none focus:ring-0 focus:shadow-none
                        "
              name="rate" 
              value={formValues.rate}
              min={rate.minrate}
              max={rate.maxRate}
              onChange={handleChange}
              id="customRange2"
            />
          </div>
          <div className="group">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Example textarea
            </label>
            <textarea
              className="
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
              name="description"
              onChange={handleChange}
              value={formValues.description}
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
