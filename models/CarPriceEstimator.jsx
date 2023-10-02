import React, {useState, useEffect} from 'react';
import { styles } from '@/styles';

const CarPriceEstimator = () => {
  const [formData, setFormData] = useState({
    year:"",
    price:"",
    km:"",
    owner:"",
    fuel_type:"",
    buy_type:"",
    transmission_type:""
  })

  const [prediction, setPrediction] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Please fill all the entries for a correct response!')

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "owner" && (parseInt(value) > 3 || parseInt(value) < 0)) {
      return; 
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const predictPrice = async () => {
    try {
      const response = await fetch('https://ml-projects.onrender.com/api/regression_car', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setIsError(true);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      setIsError(true);
      console.error('Error predicting the price of the car:', error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 2000);

  }, [isError])
  

  const buttonStyle = {
    backgroundColor: '#50C878',
    color: 'white',
    fontSize: '1.6rem',
    width: '100%',
    borderRadius: '1rem',
    border: '1px solid #000',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  }

  return (
    <div className='flex flex-col items-center mt-10 p-[20px] min-h-auto w-full'>
      <h1 className='text-2xl font-semibold flex items-center w-full justify-center'>Used Car Price Predictor Model:</h1>

      <div className="flex flex-col gap-2 mt-2 w-2/3">

      <div className='w-auto flex justify-center'>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="">
              <p>What year did you buy the car in?</p>
            </option>
            {Array.from({ length: 10 }, (_, i) => {
              const year = 2020 - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        

        <div className='w-auto flex justify-center'>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder='price ($$$)'
            className='p-2 w-full rounded-2xl cursor-pointer hover:scale-105'
            >
          </input>
        </div>

        <div className='w-auto flex justify-center'>
          <input
            name="km"
            value={formData.km}
            onChange={handleChange}
            placeholder='how many kilometers does the car have?'
            className='p-2 w-full rounded-2xl cursor-pointer hover:scale-105'
            >
          </input>
        </div>
        
        <div className='w-auto flex justify-center'>
          <input
            type="number"
            name="owner"
            placeholder="how many previous owners the car have?"
            value={formData.owner}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            />
        </div>

        <div className='w-auto flex justify-center'>
          <select
            name="fuel_type"
            value={formData.fuel_type}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="">
              <p>What type of fuel does the car work on?</p>
            </option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>

        <div className='w-auto flex justify-center'>
          <select
            name="buy_type"
            value={formData.buy_type}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="">
              <p>from where did you buy the car?</p>
            </option>
            <option value="Individual">Individual</option>
            <option value="Dealer">Dealer</option>
          </select>
        </div>

        <div className='w-auto flex justify-center'>
          <select
            name="transmission_type"
            value={formData.transmission_type}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="">
              <p className='uppercase'>What type of car is it?</p>
            </option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        <div className="mt-5">
          <button onClick={predictPrice} className='uppercase w-full rounded-2xl transition-transform transform hover:scale-105' style={buttonStyle}>
            <p className='text-lg'>Calculate</p>
            <p className="text-lg max-md:hidden block">the Price of my Car</p>
          </button>
        </div>
      </div>

      {isError && 
          <div className='mt-5'>
            <p className='text-red-400'>{errorMsg}</p>
          </div>
      }

      {prediction && (
        <div className='mt-5'>
          <p className='text-2xl max-sm:text-lg'>you should get a minimum of {prediction} thousand dollars.</p>
        </div>
      )}
    </div>
  )
}

export default CarPriceEstimator