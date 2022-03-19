import { Injectable } from '@angular/core';
import { CertificateObject } from 'src/assets/Objects/CertificatesObject';
import { Project } from 'src/assets/Objects/ProjectObject';
import { skillsIcons } from 'src/assets/Objects/SkillsIcons';
import { prof } from 'src/assets/Objects/proficiency';

@Injectable({
  providedIn: 'root'
})
export class HardCodingDataService {

  constructor() { }

  // Intro Data 
  introFirstPart : string = "A passionate Full Stack Software Developer 👨‍💻 having experience in building Web and Mobile applications with";
  introSecondPart: string = "and some other cool libraries and frameworks.";

  // Resume Link
  downloadResumeLink : string = "https://drive.google.com/u/1/uc?id=1cW5GUvnxTvIM3tNEmTP5LKDlHzSRbd2e&export=download";

  // What I do component
  whatIDoMain : string = "Ethical Hacker and Full Stack developer who loves to explore New Tech. ";
  whatIDosub : string[] = ["🔱 An Expert who is well equiped to develop and test your website + mobile apps. "];

  // Some words about Skills 
  skillsDetails : string = "I BUILD THINGS 🔥 and I have tried multiple technologies in the way of reaching a point where I can call myself a Full Stack Developer 😎 . Below are some of the Skills that I am comfortable with. ";

  // Skills 
  skills : string[] = [
    "Java", "Angular", "Python", "Shell", "Spring", "Hibernate", "MySQL", "MongoDB", "SpringSec", "TypeScript", "C", "DSA",
    "Docker", "GitHub", "Wireshark", "AWS-S3", "Isilon", "Networking", "SMB/NFS", "CyberSecurity"
  ];
  
  skills_icons : skillsIcons[] = [
    new skillsIcons("../assets/Icons/bxl-java.svg","Java"),
    new skillsIcons("../assets/Icons/bxl-python-color.svg","Python"),
    new skillsIcons("../assets/Icons/bxl-angular.svg","Angular"),
    new skillsIcons("../assets/Icons/mongodb.svg","MongoDB"),
    new skillsIcons("../assets/Icons/bxl-html5.svg","HTML5"),
    new skillsIcons("../assets/Icons/bxl-css3.svg","CSS3"),
    new skillsIcons("../assets/Icons/bxl-sass.svg","SCSS"),
    new skillsIcons("../assets/Icons/bxl-javascript.svg","JavaScript"),
    new skillsIcons("../assets/Icons/bxl-android.svg","Android"),
    new skillsIcons("../assets/Icons/postgresql.svg","Postgresql"),
    new skillsIcons("../assets/Icons/mysql.svg","MySQL"),
    new skillsIcons("../assets/Icons/githuub.svg","Git"),
    new skillsIcons("../assets/Icons/bxl-spring-boot.svg","Spring"),
    new skillsIcons("../assets/Icons/typescript.svg","TypeScript"),
    new skillsIcons("../assets/Icons/lan-networking.svg","Networking"),
    new skillsIcons("../assets/Icons/secure-networking.svg","CyberSec"),
    new skillsIcons("../assets/Icons/nas.svg","NAS"),
    new skillsIcons("../assets/Icons/bxl-docker.svg","Docker"),
    new skillsIcons("../assets/Icons/figma.svg","Figma"),
    new skillsIcons("../assets/Icons/bxl-aws.svg","EC2")
  ];




  // Proficiency Percentage
  backEndProfPercent : number = 10;
  frontEndProfPercent : number = 10;
  cyberSecurityProfPercent : number = 10;
  infraStructureProfPercent : number = 10;
  androidProfPercent : number = 10;
  programmingProfPercent : number = 10;

  proficiency : prof[] = [
    // new prof("Back-end", 89, "../assets/Icons/backend.svg"),
    new prof("Back-end", 89, "../assets/Icons/backend copy.svg"),
    new prof("Front-end", 70, "../assets/Icons/front-end.svg"),
    new prof("Cyber Security", 55, "../assets/Icons/cybersecurity.svg"),
    new prof("InfraStructure", 85, "../assets/Icons/infrastructure.svg"),
    new prof("Android", 45, "../assets/Icons/android.svg"),
    new prof("Programming", 93, "../assets/Icons/coding.svg"),
  ]

  
  // Contact me Details
  aboutMe : string = "Full Stack Developer 👨‍💻 || Certified Ethical Hacker CEHv10 👾 || Competitive Programmer 🔥 || Technical Trainer 🎙 || Curious Geek 🤓";
  email : string = "ps.prafullsaxena0@gmail.com";
  openToWork : string = "YES";


  // MediaLink URL
  githubURL: string = "https://github.com/PrafullSaxena";
  linkedInURL : string = "https://www.linkedin.com/in/prafullsaxena";
  facebookURL : string = "https://www.facebook.com/profile.php?id=100007032421000";
  instagramURL : string = "https://www.instagram.com/prafullsaxena__/";
  leetcodeURL : string = "https://leetcode.com/prafullsaxena__/";
  whatsappURL : string = "http://wa.me/9105939153";


  //contact Form placeholder

  namePlaceHolder : string = "🤔 What should I call you? ";
  emailPlaceHolder : string = "📧 Share your email so I can reach out to you!! ";
  messagePlaceHolder : string = "😇 Your Feedback is highly appreciated...";

  // Certificates

  ecCouncil : CertificateObject = new CertificateObject (
    "../assets/Icon-Images/ec-council.png",
    "Certified Ethical Hacker v10 ",
    "One of the best Certificates that teaches you everything from launching an attack to mitigating it ",
    []
  );

  ciscoCS : CertificateObject = new CertificateObject (
    "../assets/Icon-Images/cisco.png",
    "CyberSecurity Speciliest",
    "This is has everything one need to know for getting started with CyberSecurity",
    []
  );

  linkedinLearing : CertificateObject = new CertificateObject(
    "../assets/Icon-Images/linkedin.png",
    "Linked Learning Certificates",
    "",
    ["Java Script","Networking","Network - Physical","Network - TCP"]
  );

  udemy : CertificateObject = new CertificateObject(
    "../assets/Icon-Images/udemy.png",
    "Udemy Certificates ",
    "",
    ["Bug Bounty Hunting","Java / Python","Angular","Full Stack Development"]
  );

  certificate_array : CertificateObject[] = [this.ecCouncil, 
    this.ciscoCS,
    this.linkedinLearing,
    this.udemy];
 
  //  End: Certificates

  // svgPath : string = "";
  // projectName : string = "";
  // projectInfo : string = "";
  // projectURL : string = "";

  //Project
  
  sortingVusilizer : Project = new Project(
    "sortingVisulizerSVG",
    "Sorting Visulizer",
    "Angular Application that Visulize the different types of Sorting algorithms.",
    "https://github.com/PrafullSaxena/"
  );

  searchingVusilizer : Project = new Project(
    "searchVisulizerSVG",
    "Searching Visulizer",
    "Angular Application that Visulize the different types of Searching algorithms.",
    "https://github.com/PrafullSaxena/"
  );

  jobTracker : Project = new Project(
    "jobTracker",
    "Job-Opening Tracker",
    "A Python Application that keeps the tracks of a Job and logs it in the CSV file.",
    "https://github.com/PrafullSaxena/JobSearch"
  );

  ticTakToe : Project = new Project(
    "ticTakToe",
    "Tic-Tac-Toe",
    "Simple CLI Based TicTacToe application build over Java",
    "https://github.com/PrafullSaxena/Java-tikTakToe"
  );

  empDashBoard : Project = new Project(
    "empDashboard",
    "Employee Management Dashboard",
    "A Dashboard to manage CRUD on Employee DataSet build over Angular + Spring Boot + MySQL.",
    "https://github.com/PrafullSaxena/Employee-Manager"
  );

  leetCode : Project = new Project(
    "leetcode",
    "Some LeetCode Solutions",
    "Optimum Solution on Java for some famous Problems on LeetCode",
    "https://github.com/PrafullSaxena/LeetCode"
  );

  //End: Project
}
