import emailjs from "emailjs-com";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    "service_usbn9yy", // Replace with your EmailJS service ID
    "template_a3hz3qb", // Replace with your EmailJS template ID
    { name, email, message },
    "q8WBRgAN4pqLK26_a" // Replace with your EmailJS user ID
  );
};

export default mail;
