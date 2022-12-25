const express = require("express");
const likeRouter = express.Router();

const { likeService } = require("../service");

//찜하기
likeRouter.post("/:study_id", async (req, res, next) => {
    try {
      const userId = 1;
      const studyId = req.params.study_id;
      const newLike = await likeService.addLike(userId,studyId);
  
      res.status(201).json(newLike);
    } catch (error) {
      next(error);
    }
});

//찜 삭제하기
likeRouter.delete("/:study_id", async (req, res, next) => {
    try {
      const userId = 1;
      const studyId = req.params.study_id;
      const deleteLike = await likeService.deleteMyLike(userId,studyId);
  
      res.status(201).json(deleteLike);
    } catch (error) {
      next(error);
    }
});


  module.exports = likeRouter;