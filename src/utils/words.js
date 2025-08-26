export const SOLUTIONS = [
    "apple","grape","pearl","train","stone","light","candy","house"
  ];
  
  // For simplicity, we accept guesses from the same set.
  // Replace with a larger list if you want: VALID_GUESSES = [...big list...]
  export const VALID_GUESSES = Array.from(new Set([...SOLUTIONS]));
  
  export const getRandomWord = () => SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
  
  export const isValidGuess = (guess) => {
    const g = String(guess || "").toLowerCase();
    return g.length === 5 && VALID_GUESSES.includes(g);
  };
  