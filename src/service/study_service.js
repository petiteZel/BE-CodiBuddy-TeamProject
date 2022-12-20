const { Study } = require('../db')

class studyService {
    constructor(Study) {
        this.Study = Study;
    }

    async addStudy(studyData) {
        const createStudy = Study.create(studyData)
        return createStudy
    }

}