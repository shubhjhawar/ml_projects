import React, { useState } from 'react';

const CarClassifier = () => {
  const [formData, setFormData] = useState({
    buying: 'vhigh',
    maint: 'vhigh',
    doors: '2',
    persons: '1', 
    lug_boot: 'small',
    safety: 'low',
  });
  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "persons" && parseInt(value) < 1) {
      return; // Do not update the state
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const classifyCar = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/classification_car', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error classifying car:', error);
    }
  };

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
      <h1 className='text-2xl font-semibold flex items-center w-full justify-center'>Car Classifier Model:</h1>

      <div className="flex flex-col gap-2 mt-2 w-2/3 ">
        
        <div className='flex flex-row max-md:flex-col gap-2'>
          <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Buying Cost -</p>
          <select
            name="buying"
            value={formData.buying}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
          >
            <option value="vhigh">Very High</option>
            <option value="high">High</option>
            <option value="med">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className='flex flex-row max-md:flex-col gap-2'>
          <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Maintainence Cost -</p>
          <select
            name="maint"
            value={formData.maint}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="vhigh">Very High</option>
            <option value="high">High</option>
            <option value="med">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className='flex flex-row max-md:flex-col gap-2'>
          <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Total Doors -</p>
          <select
            name="doors"
            value={formData.doors}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        
        <div className='flex flex-row max-md:flex-col gap-2'>
          <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Total People -</p>
          <input
            type="number"
            name="persons"
            placeholder="Persons"
            value={formData.persons}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            />
        </div>
        <div className='flex flex-row max-md:flex-col gap-2'>
          <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Luggage Capacity -</p>
          <select
            name="lug_boot"
            value={formData.lug_boot}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="small">Small</option>
            <option value="med">Medium</option>
            <option value="big">Big</option>
          </select>
        </div>

        <div className='flex flex-row max-md:flex-col gap-2'>
          <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Safety -</p>
          <select
            name="safety"
            value={formData.safety}
            onChange={handleChange}
            className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
            >
            <option value="low">Low</option>
            <option value="med">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mt-5">
          <button onClick={classifyCar} className='uppercase w-full rounded-2xl transition-transform transform hover:scale-105' style={buttonStyle}>
            <p className='text-lg'>Predict</p>
            <p className="text-lg max-md:hidden block">the Quality of my Car</p>
          </button>
        </div>
      </div>
      {prediction && (
        <div className='mt-5'>
          <p className='text-2xl max-sm:text-lg'>You car is in a {prediction} condition</p>
        </div>
      )}
    </div>
  );
};

export default CarClassifier;
