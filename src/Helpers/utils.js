import moment from "moment";

export const generateTitleOutOfCamelCaseKey = key => key?.split("")?.map((letter, i) => i === 0 ? letter : letter === letter.toUpperCase() ? ` ${letter}` : letter).join("")

export const dateFormat = "D MMM yyyy";

export const formatData = ({ data, key }) => {
  if (key.toLowerCase() === "date") {
    return moment(data[key]).format(dateFormat)
  } else {
    return data[key]
  }
};