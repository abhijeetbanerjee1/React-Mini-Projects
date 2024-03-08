// By defining the SkillDef type with an index signature [key: string]: string;, you're telling TypeScript that any string key can be used to access a value in skillDef.

type SkillDef = {
  [key: string]: string;
};

const skillDict = {
  React: "/react.png",
  Java: "/java.png",
  JavaScript: "/javascript.png",
  Python: "/python.png",
  HTML: "/html.png",
  CSS: "/css3.png",
  "C++": "/c-logo.png",
  TypeScript: "/typescript.png",
  "Node.js": "/nodejs.png",
  "Express.js": "/express-js.png",
  MongoDB: "/mongodb.png",
  MySQL: "/mysql.png",
  AWS: "/aws.png",
  GitHub: "/github.png",
};

const skillDef: SkillDef = {
  React: "I used React for fun",
  Java: "Java was used for coding",
  JavaScript: "This is JavaScript",
};

export default { skillDict, skillDef };
