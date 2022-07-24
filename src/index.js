import "./styles/index.scss";
import $ from "jquery";
// import "bootstrap";

const userStack = {
  language: "JavaScript",
  framework: "React",
};

const user = {
  name: "Saule",
  ...userStack,
};

$(".block").html("jQuery is alive");

console.log("user", user);
