const devTeam = {
    lead: {
        name: "Alice",
        skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
        { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
        { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
};

/*  
Dentro l'oggetto devTeam, ci sono cinque oggetti in totale:
anche gli array sono oggetti.
*/

const teamLead = devTeam.lead.skills.push("GraphQL");

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = 'MobileApp';


  

function newTester(name) {
    const nuoveSkills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django", "PostgreSQL"];
    const skillsCasuali = [];
  
    for (let i = 0; i < 3; i++) {
      const indiceCasuale = Math.floor(Math.random() * nuoveSkills.length);
    skillsCasuali.push( nuoveSkills [indiceCasuale]);
    }
  
    return {
      name: name,
      skills: skillsCasuali
    };
  }
  
  const tester = newTester("Nuovo Tester");
  console.log(tester, devTeam);
  




/* 
oltre agli oggetti esistenti abbiamo:
devTeamCopy: che sarebbe la copia di tutto l'oggetto devTeam.
tester: È l'oggetto restituito dalla funzione newTester, con le proprieta name e skills.
quindi nel totale del codice abbiamo 5 oggetti definiti, 2 due oggetti creati.
in totale abbiamo 7 oggetti in tutto il codice.
*/








