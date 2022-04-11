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

const linkableCommands = {
  projects: [
    {
      name: "RailsTemplate",
      link: "https://github.com/7chris71000/Rails-Template",
    },
    {
      name: "CardMatchingMobile",
      link: "https://github.com/7chris71000/card-matching-react-native",
    },
    {
      name: "DataProtectionWithRailsAPI",
      link: "https://github.com/7chris71000/authentication-wo-devise-rails-api",
    },
    {
      name: "xkcdCromeExtension",
      link: "https://github.com/7chris71000/xkcd_extension",
    },
  ],

  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/christopher-francis-40227b127/",
    },
    {
      name: "GitHub",
      link: "https://github.com/7chris71000",
    },
  ],

  "terminal-repository": [
    {
      name: "https://github.com/7chris71000/portfolio",
      link: "https://github.com/7chris71000/portfolio",
    },
  ],

  resume: [
    {
      name: "ChrisFrancisResume.pdf",
      link: "#",
    },
  ],
};

export { helpText, commandHelpText, linkableCommands };
