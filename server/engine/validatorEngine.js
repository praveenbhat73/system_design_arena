exports.validateDesign = ({ expectedComponents, userComponents }) => {
  const matched = expectedComponents.filter(c =>
    userComponents.includes(c)
  );

  const missing = expectedComponents.filter(c =>
    !userComponents.includes(c)
  );

  return {
    matched,
    missing,
    coverage: matched.length / expectedComponents.length,
  };
};
