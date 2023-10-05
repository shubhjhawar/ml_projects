import os
import joblib

def load_model():
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Construct the absolute path to the .pkl file
    pkl_file_path = os.path.join(script_dir, 'loan_application.joblib')

    # Load the model using joblib
    loaded_model = joblib.load(pkl_file_path)

    return loaded_model


def apply(self_employed, loan_amount, loan_amount_term, applicant_income, coapplicant_income, credit_history):
    model = load_model()

    print(self_employed, loan_amount, loan_amount_term, applicant_income, coapplicant_income, credit_history)

    if(self_employed == 'Yes'):
        Self_Employed_Yes = True
    else:
        Self_Employed_Yes = False
    
    LoanAmount = int(loan_amount)
    Loan_Amount_Term = int(loan_amount_term)
    ApplicantIncome = int(applicant_income)
    CoapplicantIncome = int(coapplicant_income)
    if(credit_history == 'Yes'):
        Credit_History = 1
    else:
        Credit_History = 0

    answer = model.predict([[Self_Employed_Yes, Loan_Amount_Term,	CoapplicantIncome, Credit_History, ApplicantIncome, LoanAmount]])
    return answer
    