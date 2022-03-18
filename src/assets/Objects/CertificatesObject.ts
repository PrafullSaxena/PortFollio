
export class CertificateObject {

    imgUrl : String = "";
    certificateName : string = "";
    infoCertificate : string = "";
    lists : string[] = [];

    constructor(
        imgUrl : string,
        certificateName : string,
        infoCertificate : string,
        lists : string[]) {

            this.imgUrl = imgUrl;
            this.certificateName = certificateName;
            this.infoCertificate = infoCertificate;
            this.lists = lists;
    }

    
}