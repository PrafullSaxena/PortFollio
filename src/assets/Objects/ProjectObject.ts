
export class Project {

    svgLocation : String = "";
    projectName : string = "";
    projectInfo : string = "";
    projectURL : string = "";

    constructor(
        svgLocation : string,
        projectName : string,
        projectInfo : string,
        projectURL : string) {

            this.svgLocation = svgLocation;
            this.projectName = projectName;
            this.projectInfo = projectInfo;
            this.projectURL = projectURL;
    }

}