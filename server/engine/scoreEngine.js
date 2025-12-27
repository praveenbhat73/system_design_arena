exports.calculateScore = ({ coverage, loadTest }) => {
  let score = 0;

  score += coverage * 60; // design quality
  score += loadTest.successRate * 30; // stability
  score += loadTest.systemStatus === "STABLE" ? 10 : 0;

  return Math.round(score);
};
