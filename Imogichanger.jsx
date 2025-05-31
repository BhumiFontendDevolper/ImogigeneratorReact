import React,{useState} from "react";
const Imogichanger=()=>{
const moods = [
  { emoji: "😄", mood: "Happy", message: "Keep smiling!", bgColor: "#FFF9C4" },       // light yellow
  { emoji: "😢", mood: "Sad", message: "It's okay to feel sad sometimes.", bgColor: "#BBDEFB" }, // light blue
  { emoji: "😡", mood: "Angry", message: "Take a deep breath...", bgColor: "#FFCDD2" }, // soft pink
  { emoji: "😴", mood: "Sleepy", message: "Time for a nap maybe?", bgColor: "#ECEFF1" }, // light grey-blue
  { emoji: "😎", mood: "Cool", message: "You're rockin' it!", bgColor: "#B2DFDB" },    // light teal
  { emoji: "😱", mood: "Surprised", message: "Whoa! Didn't see that coming!", bgColor: "#F8BBD0" }, // pastel pink
  { emoji: "🤢", mood: "Sick", message: "Get well soon!", bgColor: "#C8E6C9" },        // light green
  { emoji: "🤔", mood: "Thinking", message: "Hmm... that's interesting.", bgColor: "#FFF59D" }, // pale yellow
  { emoji: "😇", mood: "Innocent", message: "So pure and sweet!", bgColor: "#E1BEE7" }, // soft lavender
  { emoji: "🥳", mood: "Excited", message: "Let's celebrate!", bgColor: "#FFE082" },   // light gold
  { emoji: "😬", mood: "Nervous", message: "You'll do great!", bgColor: "#B3E5FC" },   // light sky blue
  { emoji: "🥺", mood: "Begging", message: "Please pretty please!", bgColor: "#FFCCBC" }, // peach
  { emoji: "😏", mood: "Smug", message: "Gotcha!", bgColor: "#CE93D8" },               // soft purple
  { emoji: "🙃", mood: "Sarcastic", message: "Oh sure, totally...", bgColor: "#FFF9C4" }, // pale yellow
  { emoji: "😐", mood: "Neutral", message: "Just another day...", bgColor: "#CFD8DC" }, // soft grey
  { emoji: "😭", mood: "Crying", message: "Let it all out.", bgColor: "#90CAF9" },      // light blue
  { emoji: "😤", mood: "Frustrated", message: "Hang in there!", bgColor: "#EF9A9A" },   // soft coral
  { emoji: "🤓", mood: "Nerdy", message: "Time to code!", bgColor: "#81D4FA" },        // light blue
  { emoji: "😜", mood: "Silly", message: "Let's get goofy!", bgColor: "#F8BBD0" },     // pastel pink
  { emoji: "🤠", mood: "Yeehaw", message: "Howdy partner!", bgColor: "#FFF59D" },      // pale yellow
  { emoji: "😶", mood: "Speechless", message: "No words, huh?", bgColor: "#CFD8DC" },  // soft grey
  { emoji: "😔", mood: "Regretful", message: "Tomorrow is a new day.", bgColor: "#B0BEC5" }, // light grey-blue
  { emoji: "😵", mood: "Dizzy", message: "Woah, take a break!", bgColor: "#EF9A9A" },   // soft coral
  { emoji: "🤬", mood: "Raging", message: "Let's cool off.", bgColor: "#FFABAB" },     // light red
  { emoji: "🤑", mood: "Greedy", message: "Show me the money!", bgColor: "#D0F0C0" },   // light green
  { emoji: "🥶", mood: "Frozen", message: "Brrr... cold!", bgColor: "#B3E5FC" },       // light sky blue
  { emoji: "🥵", mood: "Overheated", message: "Too hot to handle!", bgColor: "#FFDAB9" }, // peach
  { emoji: "😕", mood: "Confused", message: "Wait... what?", bgColor: "#FFF9C4" },      // pale yellow
  { emoji: "😳", mood: "Embarrassed", message: "Oops!", bgColor: "#FFCCBC" },          // peach
  { emoji: "🤩", mood: "Starstruck", message: "Wow, amazing!", bgColor: "#FFE082" },   // light gold
  { emoji: "😪", mood: "Exhausted", message: "Get some rest.", bgColor: "#E0F7FA" },   // very light blue
  { emoji: "😒", mood: "Unamused", message: "Not impressed.", bgColor: "#CFD8DC" },    // soft grey
  { emoji: "🤡", mood: "Clowning", message: "Silly time!", bgColor: "#F8BBD0" },       // pastel pink
  { emoji: "👻", mood: "Spooky", message: "Boo!", bgColor: "#ECEFF1" },                // light grey-blue
  { emoji: "💀", mood: "Dead Inside", message: "Nope.", bgColor: "#E0E0E0" },          // light grey
  { emoji: "🤯", mood: "Mind Blown", message: "Mind = Blown!", bgColor: "#FFCCBC" },   // peach
  { emoji: "🤫", mood: "Secretive", message: "Shhh...", bgColor: "#D1C4E9" },          // soft purple
  { emoji: "😷", mood: "Masked", message: "Stay safe!", bgColor: "#C8E6C9" },          // light green
  { emoji: "🥰", mood: "In Love", message: "Aww, cute!", bgColor: "#F8BBD0" },        // pastel pink
  { emoji: "😘", mood: "Flirty", message: "Smooch!", bgColor: "#F48FB1" },            // soft pink
  { emoji: "😈", mood: "Mischievous", message: "Hehe... trouble!", bgColor: "#E1BEE7" }, // lavender
  { emoji: "👽", mood: "Alien", message: "Greetings, Earthling!", bgColor: "#B2EBF2" }, // pale cyan
  { emoji: "👾", mood: "Game Mode", message: "Let's play!", bgColor: "#81D4FA" },      // light blue
  { emoji: "🤖", mood: "Robot", message: "Beep boop.", bgColor: "#CFD8DC" },           // soft grey
  { emoji: "🫠", mood: "Melting", message: "Ugh... I'm melting!", bgColor: "#FFF9C4" },// pale yellow
  { emoji: "🫡", mood: "Respectful", message: "Yes, sir!", bgColor: "#C8E6C9" },       // light green
  { emoji: "🫥", mood: "Invisible", message: "Where did I go?", bgColor: "#E0E0E0" },   // light grey
  { emoji: "🫣", mood: "Peeking", message: "Just checking!", bgColor: "#FFF9C4" },     // pale yellow
  { emoji: "😌", mood: "Relieved", message: "Phew...", bgColor: "#C5E1A5" },           // light green
  { emoji: "😝", mood: "Playful", message: "Heehee!", bgColor: "#FFCC80" },            // light orange
  { emoji: "🫶", mood: "Heart Hands", message: "Sending love!", bgColor: "#F8BBD0" },  // pastel pink
  { emoji: "💩", mood: "Silly Mess", message: "What a mess!", bgColor: "#D7CCC8" }     // soft brown/grey
];


const [mood,setmode]=useState(moods[0]);
const Randomimogigenerator=()=>{
    let idx;
    idx=Math.floor(Math.random()*moods.length);
    setmode(moods[idx])
}

return(
    <div className="parent" style={{backgroundColor:mood.bgColor}}>
    <div className="Imoji">
{mood.emoji}
    </div>
    <h1 className="mode">
{mood.mood}
    </h1>
    <p className="messeage">
        {mood.message}
    </p>
    <button onClick={Randomimogigenerator} className="btn">
      change mode {mood.emoji}
    </button>
</div>
)
}

export default Imogichanger;