import defaultImage from "../assets/default-image.png";

export const handleImageError = (e) => {
  e.target.src = defaultImage;
};

export const formatDate = (date) => {
  const parsedDate = new Date(date);
    return `${parsedDate.getDate()}/${parsedDate.getMonth()}/${parsedDate.getFullYear()}`
}
