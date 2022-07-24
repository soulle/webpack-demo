import "./styles/index.scss";

const userStack = {
  language: "JavaScript",
  framework: "React",
};

const user = {
  name: "Saule",
  ...userStack,
};

console.log("user", user);
