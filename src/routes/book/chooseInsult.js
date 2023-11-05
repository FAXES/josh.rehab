let phrases = [
    "test one",
    "test two",
];

export function load({}) {
    return phrases[Math.floor(Math.random() * phrases.length)];
}