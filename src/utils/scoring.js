// Returns array of: 'correct' | 'present' | 'absent' for each letter
export const scoreGuess = (solution, guess) => {
    const sol = solution.toLowerCase();
    const g = guess.toLowerCase();
    const res = Array(5).fill("absent");
  
    const solCounts = {};
    for (let i = 0; i < 5; i++) {
      if (g[i] === sol[i]) res[i] = "correct";
      else solCounts[sol[i]] = (solCounts[sol[i]] || 0) + 1;
    }
    for (let i = 0; i < 5; i++) {
      if (res[i] === "correct") continue;
      if (solCounts[g[i]] > 0) {
        res[i] = "present";
        solCounts[g[i]]--;
      }
    }
    return res;
  };
  
  // Simple scoring: base 100 - 10 per extra attempt - 1 per 10s elapsed
  export const computeScore = ({ attempts, startedAt, endedAt }) => {
    const secs = Math.max(0, Math.floor((endedAt - startedAt) / 1000));
    const timePenalty = Math.floor(secs / 10);
    return Math.max(0, 100 - (attempts - 1) * 10 - timePenalty);
  };
  