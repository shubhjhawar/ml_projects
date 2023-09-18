import { carc, breastc, cifar, loan, fashion, redcar, real, stock, catvdog} from "@/assets"

const classificationModels = {
    title: "Classification Models",
    desc: "Here is a selection of projects focusing on classification tasks.",
    projects: [
        {
            title: "Car Classfier",
            description: "Based on the information provided the model predicts the quality of the car",
            icon: carc,
        },
        {
            title: "Breast Cancer Detector",
            description: "based on the information provided about the tumour, the models helps us find out if it is benign or malignant",
            icon: breastc,
        },
        {
            title: "Cifar 10 Image Classification",
            description: "Classifying diverse 32x32 pixel images into ten distinct categories.",
            icon: cifar,
        },
        {
            title: "Loan Application",
            description: "the model predicts if the person applying for a loan would be able to repy it back in time or not",
            icon: loan,
        },
        {
            title: "Fashion MNIST",
            description: "works same as CIFAR10 but on fashion articles and predicts clothing items",
            icon: fashion,
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
        },
        {
            title: "Real Estate Price Estimator",
            description: "after comparing all the things that affects the price of the house, the model gives us an appropriate amount for the property in question",
            icon: real,
        },
        {
            title: "Stock Price Predictor",
            description: "real time stock prediction for next 7 days using ML model.",
            icon: stock,
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
        },
    ]
}

export { classificationModels, regressionModels, MiscModels }