
export class Project {

    constructor(
        public svgLocation : string,
        public projectName : string,
        public projectInfo : string,
        public projectURL : string) {

            this.svgLocation = svgLocation;
            this.projectName = projectName;
            this.projectInfo = projectInfo;
            this.projectURL = projectURL;
    }

}