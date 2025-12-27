const questions = require("../data/questions");

exports.getRandomQuestion = () => {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
};
