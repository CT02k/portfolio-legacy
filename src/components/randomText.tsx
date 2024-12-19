const quotes = [
    "A criatividade é a inteligência se divertindo. — Albert Einstein",
    "O design não é apenas o que parece e o que se sente. O design é como funciona. — Steve Jobs",
    "O único jeito de fazer um excelente trabalho é amar o que você faz. — Steve Jobs",
    "A simplicidade é o último grau de sofisticação. — Leonardo da Vinci",
    "Criatividade é permitir a si mesmo cometer erros. Arte é saber quais deles manter. — Scott Adams",
    "O design é onde a ciência e a arte chegam a um ponto de convergência. — Robin Mathew"
];

export default function randomText() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return <p>{quote}</p>;
}