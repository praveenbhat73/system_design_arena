const express = require("express");
const cors = require("cors");

const { getRandomQuestion } = require("./engine/questionEngine");
const { validateDesign } = require("./engine/validatorEngine");
const { runLoadTest } = require("./engine/loadTestEngine");
const { calculateScore } = require("./engine/scoreEngine");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * GET random question
 */
app.get("/api/question", (req, res) => {
  const question = getRandomQuestion();
  res.json(question);
});

/**
 * POST submit design
 */
app.post("/api/submit", (req, res) => {
  const { questionId, userComponents } = req.body;

  if (!userComponents || !Array.isArray(userComponents)) {
    return res.status(400).json({ error: "Invalid design input" });
  }

  const question = getRandomQuestion();

  const validation = validateDesign({
    expectedComponents: question.components,
    userComponents,
  });

  const loadTest = runLoadTest({
    designQuality: validation.coverage,
  });

  const score = calculateScore({
    coverage: validation.coverage,
    loadTest,
  });

  res.json({
    question: question.title,
    validation,
    loadTest,
    score,
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
