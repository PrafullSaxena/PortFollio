
export class CertificateObject {

    constructor(
        public imgUrl : string,
        public certificateName : string,
        public infoCertificate : string,
        public lists : string[]) {

            this.imgUrl = imgUrl;
            this.certificateName = certificateName;
            this.infoCertificate = infoCertificate;
            this.lists = lists;
    }

    
}