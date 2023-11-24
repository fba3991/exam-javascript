const devTeam = {
  lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
  },
  testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
  ],
  projectName: "WebApp",
};

const teamLead = devTeam.lead;
teamLead.skills.push("GraphQl");

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";

function createTester(name) {
  const possibleSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Django",
    "PostgreSQL",
  ];
  let skills = [];

  for (let i = 0; i < 3; i++) {
    const n = Math.floor(Math.random() * 8);
    const skill = possibleSkills[n];
    skills.push(skill);
  }
  const testers = { name, skills };
  return testers;
}
const newTester = createTester("Fabio");
devTeam.testers.push(newTester);

console.log(newTester, devTeam);
