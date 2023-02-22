export const actionPlus = (payload = 1) => {
  return { type: "plus", payload };
};

export const actionMinus = (payload = 1) => {
  return { type: "minus", payload };
};
