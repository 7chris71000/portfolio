const helpText =
  "This command is used to help the user learn about valid commands to use in CF Terminal.\n" +
  "\n" +
  "Usage: [command] -h\n" +
  "\n" +
  "Available Commands:\n" +
  "\tNote: Click a command to view it's help text\n";

const commandHelpText = {
  ls: "List all files and folders in the current directory",
  help: "Displays all valid commands to use in CF Terminal.",
  clear: "Clears the CF Terminal",
  cd: "Change the current directory",
  cat: "Displays the contents of a file",
  mkdir: "Creates a new directory",
  pwd: "Displays the current working directory",
  exit: "Exits the CF Terminal",
  "about-terminal": "Displays information about the CF Terminal application.",
  "about-me": "Displays information about myself.",
  projects:
    "Displays a list of projects completed with a brief description and GitHub link.",
  socials: "Displays a list of social media links where to find me.",
  "terminal-repository":
    "Displays a link to the GitHub repository of the CF Terminal application.",
  resume: "Displays a link to my resume.", //TODO: Resume on website page
  "tech-stack":
    "Displays a list of technologies I can use at a professional level.",
};

export { helpText };
