export const SOLUTIONS = [
"abide",
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
"grand","grant","grape","graph","grass","grave","great","green","grief","grind",
"facts",
"grove","group","guard","guest","guide","guilt","habit","happy","harsh","haste",
"hatch","haunt","heart","heavy","hedge","hello","honey","honor","horse","hotel",
"house","human","humor","hurry","ideal","image","imply","index","inept","inner",
"input","issue","ivory","jolly","judge","juice","jumbo","jumpy","karma","kayak",
"knack","kneel","knife","knock","known","label","labor","lance",
"large","laser","later","laugh","layer","learn","lease","lemon","level","light",
"limit","linen","liner","lions","liver","logic","loose","lucky","lunar","lunch",
"lying","macro","magic","major","maker","maple","march","marry","match","metal",
"meter","micro","mimic","minor","minus","mixed","model","money","month","moral",
"motor","mount","movie","music","naive","nasty","naval","nerve","never","newly",
"night","noble","noise","north","novel","nurse","oasis","occur","ocean","offer",
"often","older","olive","omega","onion","order","organ","other","ought","outer",
"owner","oxide","paint","panel","panic","paper","party","peace","pearl","pedal",
"penal","penny","phone","phase","photo","piece","piano","pilot","pitch","place",
"plain","plane","plant","plate","point","pound","press","price","pride","prime",
"print","prior","prize","probe","proof","queen","query","quick","quiet","quill",
"quite","radar","radio","raise","range","rapid","ratio","reach","react","ready",
"realm","rebel","refer","relax","relay","reply","reset","rider","right","rigid",
"rival","river","robot","rough","round","route","royal","rural","salad","sauce",
"scale","scene","scope","score","scrap","seize","sense","serve","seven","shall",
"shape","share","shark","sharp","sheep","sheet","shelf","shift","shine","shirt",

"shock","shoot","shore","short","shown","sight","since","skill","skull","slate",
"sleep","slice","slide","slope","small","smart","smile","smoke","snack","snake",
"sneak","solid","solve","sorry","sound","south","space","spare","speak","speed",
"spell","spend","spine","spite","split","spoke","sport","staff","stage","stair",
"stake","stamp","stand","stare","start","state","steam","steel","steep","stern",
"stick","still","stock","stone","store","storm","story","strip","stuck","study",
"stuff","style","sugar","suite","super","sweet","sweep","swell","swept","swift",
"table","taken","tally","tango","taste","teach","teeth","tempt","tenth","thank",
"theft","their","theme","there","these","thick","thief","thing","think","third",
"those","three","throw","thumb","tiger","tight","timer","tired","title","toast",
"today","token","topic","total","touch","tough","tower","track","trade","trail",
"train","trait","trash","treat","trend","trial","tribe","trick","tried","truly",
"trust","truth","twice","under","union","unity","upper","upset","urban","usage",
"usual","vague","valid","value","vapor","vault","vegan","verse","video","vigor",
"viral","visit","vital","vivid","vocal","voice","waste","watch","water","weary",
"weigh","weird","whale","wheat","wheel","where","which","while","white","whole",
"whose","woman","world","worry","worth","would","wreck","write","wrong","young",
"youth","zebra","zesty","zonal"




  ];
  
  // For simplicity, we accept guesses from the same set.
  // Replace with a larger list if you want: VALID_GUESSES = [...big list...]
  export const VALID_GUESSES = Array.from(new Set([...SOLUTIONS]));
  
  export const getRandomWord = () => SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
  
  export const isValidGuess = (guess) => {
    const g = String(guess || "").toLowerCase();
    return g.length === 5 && VALID_GUESSES.includes(g);
  };
  
