import React,{useState, useEffect} from 'react'
import { Puff } from 'react-loader-spinner'

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    "self_employed":"",
    "loan_amount":"",
    "loan_amount_term":"",
    "applicant_income":"",
    "coapplicant_income":"",
    "credit_history":""
  })

  const [prediction, setPrediction] = useState("")
  const [isLoading, setisLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loanPrediction = async () => {
    try {
      setisLoading(true);
      const response = await fetch('http://127.0.0.1:8000/api/loan_application', {
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
      
      if(data.success == 1) {
        setPrediction("Congratulations! Your loan will be approved.")
      } else {
        setPrediction("Unfortunately, Your loan will not be approved.")
      }

    } catch (error) {
      // setIsError(true);
      console.error('Error predicting the price of the car:', error);
    } finally {
      setisLoading(false);
    }
  };

  console.log(prediction)

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
    <div className='flex flex-col w-2/3 gap-2'>



      <div className='flex flex-row max-md:flex-col'>
        <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Self Employed? -</p>
        <select
          name="self_employed"
          value={formData.self_employed}
          onChange={handleChange}
          className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
          >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <input
          type="number"
          name="loan_amount"
          placeholder="Loan Amount"
          value={formData.loan_amount}
          onChange={handleChange}
          className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
          />
      </div>

      <div>
        <input
          type="number"
          name="loan_amount_term"
          placeholder="Loan Amount Term (in days)"
          value={formData.loan_amount_term}
          onChange={handleChange}
          className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
          />
      </div>

      <div>
        <input
          type="number"
          name="applicant_income"
          placeholder="Applicant Income (monthly)"
          value={formData.applicant_income}
          onChange={handleChange}
          className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
          />
      </div>

      <div>
        <input
          type="number"
          name="coapplicant_income"
          placeholder="Co-Applicant Income (monthly)"
          value={formData.coapplicant_income}
          onChange={handleChange}
          className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
          />
      </div>

      <div className='flex flex-row max-md:flex-col'>
        <p className='w-1/2 max-md:w-full flex items-center justify-center text-lg'>Credit History? -</p>
        <select
          name="credit_history"
          value={formData.credit_history}
          onChange={handleChange}
          className='p-2 rounded-2xl w-full cursor-pointer hover:scale-105'
          >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mt-5">
        <button onClick={loanPrediction} className='uppercase w-full rounded-2xl transition-transform transform hover:scale-105' style={buttonStyle}>
          <p className='text-lg'>Predict</p>
          <p className="text-lg max-md:hidden block">the approval of My Loan</p>
        </button>
      </div>

     <div className="mt-5 flex justify-center w-full">
     {isLoading && 
               <Puff
                  height="50"
                  width="50"
                  radius={1}
                  color="#4fa94d"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                /> 
      }

      {prediction && (
        <div className=''>
          <p className='text-2xl max-sm:text-lg'>{prediction}</p>
        </div>
      )}
     </div>
    </div>
  )
}

export default LoanApplication