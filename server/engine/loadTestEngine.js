exports.runLoadTest = ({ designQuality }) => {
  const requests = 1_000_000;

  let successRate = Math.min(1, designQuality + Math.random() * 0.2);
  let latency = Math.max(50, 800 - designQuality * 600);

  return {
    totalRequests: requests,
    successRate: Number(successRate.toFixed(2)),
    avgLatencyMs: Math.round(latency),
    systemStatus: successRate > 0.7 ? "STABLE" : "CRACKED",
  };
};
