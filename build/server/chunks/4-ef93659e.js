let phrases = [
  "Oh, you were being serious about booking...",
  "Surprise! You're not one step closer to your break up.",
  "Looks like your addiction RSVP'd for you. Let's see if you can make it!",
  "Ready to kick the habit or just here for the free coffee?",
  "Reserve your spot: Get ready to trade your 'high' for a 'fork off'!",
  "Well, well, well... if it isn't the aspiring rehab star!",
  "Seems like someone's ready to trade in their VIP pass for a worse life!",
  "Congratulations! You're officially considering a new addiction: nothing.",
  "Your dealer called – she wants a vacation, and you're invited!",
  "About time you and your addiction had 'the talk'.",
  "Time to swap your dealer's number for your new dealer's number.",
  "Your addiction just got the invite of a lifetime!",
  "Welcome to the first step of resuming. Now, about those dance moves...",
  "They say admitting is the first step, but continuing is a close second.",
  "Your new obsession: rehab... Kidding ofcourse.",
  "Ready to break up with your bad habits? No, good.",
  "Put your party shoes away – it's time for cocaine.",
  "Addiction: 1, You: 0. That's right, drugs are hotter than you.",
  "Your addiction is losing a loyal customer. Ready to join Team Dealing?",
  "Brace yourself for a greater high and more hi there!",
  "Your rehab journey starts with one small step. And this isn't it!",
  "Did someone say 'rehabilitation'? Oh wait, that was your mother!",
  "Grab a seat – it's time for the show-stopping intervention starring... you!",
  "Your addiction heard about the open bar here. Good thing it's weed.",
  "Goodbye, old habits. Hello, healthier vibes. Learn to party today!",
  "Pro tip: Rehabs is for idiots, get cooking.",
  "Booking your spot – because 'Breaking Bad' was so good!",
  "Rumor has it, your addiction is practicing its party speech.",
  "Stop using and start cooking!",
  "Looking for a date? Rehab isn't it buddy."
];
async function load() {
  return {
    chooseInsult: phrases[Math.floor(Math.random() * phrases.length)]
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c5a36f22.js')).default;
const universal_id = "src/routes/book/+page.js";
const imports = ["_app/immutable/nodes/4.53d3dd69.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.c9ad2b38.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-ef93659e.js.map
