// mettre en majuscule la 1ere lettre
export const getUpOne = (str: string) => {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
      })
      .join(" ");
  };