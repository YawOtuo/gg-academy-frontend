export const toSingular = (word: string) => {
    if (word.endsWith("s")) {
      return word.slice(0, -1); // Remove the last character (the "s")
    }
    return word; // Return as is if it's already singular
  };