export const isOnMobile = (): boolean => {
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

export const splitStringToArrayOfChars = (text: string): string[] => {
  let characters: string[] = [];
  for (let i = 0; i < text.length; i++) {
    characters.push(text[i]);
  }
  return characters;
};

export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateName = (name: string): boolean => {
  return name.length > 1 && name.length < 60;
};

export const validateMessage = (message: string): boolean => {
  return message.length > 1 && message.length < 5000;
};

export const canUserSendMail = (): boolean => {
  const mailCount: string | null = localStorage.getItem("mailCount");
  if (mailCount === null) return true;
  if (parseInt(mailCount) < 3) return true;
  return false;
};

export const incrementUserSentMails = (): void => {
  const mailCount: string | null = localStorage.getItem("mailCount");
  if (mailCount === null) {
    localStorage.setItem("mailCount", "1");
  } else {
    localStorage.setItem("mailCount", (parseInt(mailCount) + 1).toString());
  }
};
