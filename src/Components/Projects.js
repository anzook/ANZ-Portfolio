export class Project {
    constructor(title, link, github, desc, image) {
      this.title = title;
      this.link = link;
      this.github = github;
      this.desc = desc;
      this.image = image;
    }
  }
  
  export const projects = [
    new Project(
      "YappE",
      "https://yappeapp.herokuapp.com/",
      "https://github.com/anzook/yappe-app",
      "A social dog care web app",
      "https://via.placeholder.com/500"
    ),
    new Project(
      "YappE TEST",
      "https://yappeapp.herokuapp.com/",
      "https://github.com/anzook/yappe-app",
      "A social dog care web app TEST",
      "https://via.placeholder.com/500"    ),
  ]