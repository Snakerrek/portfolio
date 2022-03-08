export const isOnMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const splitStringToArrayOfChars = (text: string) => {
  let characters: string[] = [];
  for (let i = 0; i < text.length; i++) {
    characters.push(text[i]);
  }
  return characters;
};
