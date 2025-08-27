export const SOLUTIONS = [
    "apple","brick","dream","eagle","flute","ghost","happy","ivory","joker",
"knock","lemon","mango","night","ocean","plant","queen","river","stone","tiger",
"union","value","wheat","xerox","yacht","zebra","actor","blaze","charm","drift",
"earth","fancy","giant","heart","ideal","judge","karma","laugh","metal","nurse",
"oasis","piano","quiet","royal","smile","toast","unity","visit","world","xenon",
"yield","zebra","angel","brave","crank","dodge","elate","fling","grape","hover",
"index","jolly","knife","laugh","magic","noble","orbit","porch","query","relay",
"stone","truce","vital","whale","xylem","young","zonal","adept","bloom",
"cider","evade","frost","globe","hinge","joker","kneel","loyal","abbey","abide",
"abode","actor","adopt","adore","adorn","afire","agile","align",
"alloy","amaze","amble","angel","anger","angle","apart","apple","apply","arena",
"arise","armor","arrow","aside","asset","atlas","audio","audit","award","aware",
"awful","bacon","badge","baker","banjo","baron","basic","beach","beard","beast",
"begin","belly","bench","blend","bless","blink","bluff","board","boast","boost",
"brace","brain","bride","brief","bring","broad","brook","brush","build","built",
"cabin","cable","camel","candy","carry","catch","cause","chain","chair","chalk",
"champ","chant","charm","chase","cheap","check","cheer","chess","chief","child",
"civil","claim","class","clean","clear","climb","close","coach","coast","count",
"cover","crane","crash","cream","creek","creep","crime","cross","crowd","crown",
"daily","dance","dealt","death","delay","delta","demon","dense","devil","diary",
"dicey","digit","diner","dingy","disco","ditch","diver","dodge","dozen","draft",
"drama","drawn","dream","dress","drill","drink","drive","drown","druid","dryly",
"eager","early","earth","eight","elbow","elder","elect","elite","empty","enjoy",
"entry","equal","error","essay","event","every","exact","exist","extra","fable",
"faint","faith","false","favor","feast","fence","fiber","field","fight","final",
"flame","flash","fleet","flesh","float","flock","flour","fluid","focus","force",
"forge","forty","forum","frame","fraud","fresh","front","frost","fruit","funny",
"giant","glade","glare","glass","glide","globe","glory","gloss","grace","grade",
"grand","grant","grape","graph","grass","grave","great","green","grief","grind"


  ];
  
  // For simplicity, we accept guesses from the same set.
  // Replace with a larger list if you want: VALID_GUESSES = [...big list...]
  export const VALID_GUESSES = Array.from(new Set([...SOLUTIONS]));
  
  export const getRandomWord = () => SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
  
  export const isValidGuess = (guess) => {
    const g = String(guess || "").toLowerCase();
    return g.length === 5 && VALID_GUESSES.includes(g);
  };
  
