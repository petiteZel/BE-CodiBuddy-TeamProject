const express = require("express");
const tagRouter = express.Router();

const { tagService } = require("../service");

//태그 조회하기
tagRouter.get("/", async (req, res, next) => {
    try {
      const tag = await tagService.getTag();
  
      res.status(201).json(tag);
    } catch (error) {
      next(error);
    }
});

//찜 삭제하기
tagRouter.delete("/:study_id", async (req, res, next) => {
    try {
      const userId = 1;
      const studyId = req.params.study_id;
      const deletetag = await tagService.deleteMytag(userId,studyId);
  
      res.status(201).json(deletetag);
    } catch (error) {
      next(error);
    }
});


  module.exports = tagRouter;