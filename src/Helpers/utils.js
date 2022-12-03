export const generateTitleOutOfCamelCaseKey = key => key?.split("")?.map((letter, i) => i === 0 ? letter : letter === letter.toUpperCase() ? ` ${letter}` : letter).join("")
