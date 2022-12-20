const { Study } = require("../db/models");

class StudyService {
  constructor(study) {
    this.Study = study;
  }

  async addStudy(studyData) {
    const createStudy = await this.Study.create(studyData);
    
    return createStudy;
  }
}

const studyService = new StudyService(Study)

module.exports = { studyService };
