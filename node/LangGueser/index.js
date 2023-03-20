const langs = module.require('langs');
const franc = module.require('franc');
const langTry = franc('Please tell me this')

 const language = langs.where("name", "Korean");

console.log(language.name)

