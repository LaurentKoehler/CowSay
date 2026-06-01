import cowsay from "cowsay";

console.log(cowsay.say({
    text: `Hi, I'm ${process.env.NAME}, a cow from the ${process.env.CAMPUS} campus !`}))