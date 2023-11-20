import { carc, breastc, cifar, loan, fashion, redcar, real, stock, catvdog} from "@/assets"
import { 
    CarClassifier,
    BreastCancer,
    LoanApplication,
    Cifar10,
    Fashion,
    CarPriceEstimator,
    REPricePredictor,
    StockPricePredictor,
    CatDog 
} from "@/models"

const classificationModels = {
    title: "Classification Models",
    desc: "Here is a selection of projects focusing on classification tasks.",
    projects: [
        {
            title: "Car Classfier",
            description: "Based on the information provided the model predicts the quality of the car",
            icon: carc,
            working: "",
            model: <CarClassifier />,
        },
        {
            title: "Breast Cancer Detector",
            description: "based on the information provided about the tumour, the models helps us find out if it is benign or malignant",
            icon: breastc,
            working: "",
            model: <BreastCancer />,
        },
        {
            title: "Cifar 10 Image Classification",
            description: "Classifying diverse 32x32 pixel images into ten distinct categories.",
            icon: cifar,
            code: 'https://github.com/shubhjhawar/CIFAR-10-IMAGE-CLASSIFICATION',
            working: "",
            model: <Cifar10 />,
        },
        {
            title: "Loan Application",
            description: "Empowering loan decisions, this model predicts the likelihood of repayment for loan applicants. By leveraging a Decision Tree algorithm, it analyzes crucial factors like income, credit score, and employment status. During training, the model learns from historical data to create a decision-making guide. When a new loan application is submitted, it uses this guide to provide insights into whether the applicant is likely to repay the loan on time or not.",
            icon: loan,
            code: 'https://github.com/shubhjhawar/Loan-Application-Status',
            working: "The model uses a Decision Tree algorithm to analyze key factors such as income, credit score, and employment status. During training, it learns patterns from past data to create a decision-making guide. When a new loan application is submitted, the model follows this guide to predict whether the person is likely to repay the loan on time or not.",
            model: <LoanApplication />,
        },            
        {
            title: "Fashion MNIST",
            description: "works same as CIFAR10 but on fashion articles and predicts clothing items",
            icon: fashion,
            code: 'https://github.com/shubhjhawar/Fashion-MNIST',
            working: "",
            model: <Fashion />,
        },
    ]
}

const regressionModels = {
    title: "Regression Models",
    desc: "Here is a selection of projects focusing on regression tasks.",
    projects: [
        {
            title: "Car Price Estimator",
            description: "This models helps us determine the best value of a second hand car",
            icon: redcar,
            code: 'https://github.com/shubhjhawar/CAR-PRICE-ESTIMATOR',
            working: "",
            model: <CarPriceEstimator />,
        },
        {
            title: "Real Estate Price Estimator",
            description: "after comparing all the things that affects the price of the house, the model gives us an appropriate amount for the property in question",
            icon: real,
            code: 'https://github.com/shubhjhawar/real-estate-prize-predictor',
            working: "",
            model: <REPricePredictor />,
        },
        {
            title: "Stock Price Predictor",
            description: "real time stock prediction for next 7 days using ML model.",
            icon: stock,
            code: 'https://github.com/shubhjhawar/Stock-Prize-Prediction',
            working: "",
            model: <StockPricePredictor />,
        },
    ]
}

const MiscModels = {
    title: "Miscellaneous Models",
    desc: "these are all different kinds of projects that I have worked on and would like to showcase",
    projects: [
        {
            title: "Cats vs Dogs",
            description: "simple deep learing CNN models which tells us if the picture is a cat or a dog.",
            icon: catvdog,
            code: 'https://github.com/shubhjhawar/CATS-VS-DOGS',
            working: "",
            model: <CatDog />,
        },
    ]
}

export { classificationModels, regressionModels, MiscModels }