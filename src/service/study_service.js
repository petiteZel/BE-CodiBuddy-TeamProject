const { User, Tag, TagKind } = require("../db");
const { Study, Recruit, Like, StudyTag } = require("../db/models");
const dayjs = require("dayjs");
const { Op } = require("sequelize");

class StudyService {
  constructor(study_model, recruit_model, like_model, study_tag_model) {
    this.Study = study_model;
    this.StudyTag = study_tag_model;
    this.Recruit = recruit_model;
    this.Like = like_model;
  }

  async addStudy(userId, studyData) {
    const startPoint = dayjs(studyData.start_at).format("YYYY-MM-DD");
    const duration = Number(studyData.end_at);
    studyData.end_at = dayjs(startPoint)
      .add(duration, "M")
      .format("YYYY-MM-DD");
    const finalData = {
      ...studyData,
      author: userId,
    };
    const createStudy = await this.Study.create(finalData);

    return createStudy;
  }

  async getAllStudy(queryString) {
    const tagQuery = {};
    const kindQuery = {};
    if (queryString.tag) {
      tagQuery.tag_id = queryString.tag.split(",").map((e) => Number(e));
    }
    if (queryString.kind){
      kindQuery.kind = queryString.kind
    }
    const findAllStudy = await this.Study.findAll({
      attributes: {exclude: ['author']},
      include: [
        {
          model: this.StudyTag,
          where: tagQuery,
          attributes: ["tag_id"],
          include: {
            model: Tag,
            where:kindQuery,
            include:{
              model: TagKind
            }
          },
        },
        {
          model: User,
          attributes: ["id","nickname", "profile_image"],
        },
      ],
    });

    return findAllStudy;
  }

  //모임 상세보기 (아이디로 하나만 불러오기 - 포스트맨에서 확인 안됨)
  async getStudyDetail(studyId) {
    const getOneStudy = await this.Study.findOne({
      attributes: {exclude: ['author']},
      where: {
        id: Number(studyId),
      },
      include: [{
        attributes: ["tag_id"],
        model: this.StudyTag,
        include: {
          model: Tag,
        },
      },{
        model: User,
        attributes: ["id","nickname", "profile_image"],
      },]
    });

    return getOneStudy;
  }

  //찜한 스터디

  async getStudyByLike(userId) {
    const studyByLike = this.Study.findAll({
      attributes: {exclude: ['author']},
      include: [
        {
          model: this.Like,
          attributes: [],
          where: {
            user_id: Number(userId),
          },
        },
        {
          atrributes: ["tag_id"],
          model: this.StudyTag,
          include: {
            model: Tag,
          },
        },
        {
          model: User,
          attributes: ["id","nickname", "profile_image"],
        },
      ],
    });

    return studyByLike;
  }

  //모임 삭제
  async deleteMyStudy(studyId, userId) {
    const destroyStudy = await this.Study.destroy({
      where: {
        id: Number(studyId),
        author: Number(userId),
      },
    });
    return destroyStudy;
  }

  //내 모임 수정
  async patchMyStudy(userId, studyId, updateData) {
    const updateStudy = await this.Study.update(updateData.Study, {
      where: {
        id: studyId,
        author: userId,
      },
    });
    if (updateStudy) {
      const updateStudyTag = await this.StudyTag.update(updateData.Tag, {
        where: {
          study_id: studyId,
        },
      });

      return [updateStudy == 1 || updateStudyTag == 1];
    }
  }

  //참가중인 스터디
  async getMyAttendingStudy(userId) {
    const now = dayjs();
    const findMyAttendingStudy = await this.Recruit.findAll({
      attributes: [],
      where: {
        user_id: userId,
      },
      include: [
        {
          model: User,
          attributes: [],
        },
        {
          model: Study,
          attributes: {exclude: ['author']},
          where: {
            end_at: {
              [Op.gte]: now.format("YYYY-MM-DD"),
            },
          },
          include: [{
            model: StudyTag,
            attributes: ["tag_id"],
            include: {
              model: Tag,
            },
          },{
            model: User,
            attributes: ["id","nickname", "profile_image"],
          },]
        },
      ],
    });

    return findMyAttendingStudy.map((e) => {
      return e.Study;
    });
  }

  //만료된 스터디
  async getMyExpiredStudy(userId) {
    const now = dayjs();
    const findMyExpiredStudy = await this.Recruit.findAll({
      atrributes: [],
      where: {
        user_id: userId,
      },
      include: [
        {
          model: User,
          attributes: [],
        },
        {
          model: Study,
          attributes: {exclude: ['author']},
          required: true,
          where: {
            end_at: {
              [Op.lt]: now.format("YYYY-MM-DD"),
            },
          },
          include: [{
            model: StudyTag,
            attributes: ["tag_id"],
            include: {
              model: Tag,
            },
          },
          {
            model: User,
            attributes: ["id","nickname", "profile_image"],
          },]
        },
      ],
    });
    return findMyExpiredStudy.map((e) => {
      return e.Study;
    });
  }
}

module.exports = new StudyService(Study, Recruit, Like, StudyTag);
