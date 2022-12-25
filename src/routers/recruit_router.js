const express = require("express");
const recruitRouter = express.Router();

const { recruitService } = require("../service");

//모임 신청하기
recruitRouter.post("/:study_id", async (req, res, next) => {
    try {
      const userId = 2;
      const studyId = req.params.study_id;
      const newRecruit = await recruitService.addRecruit(userId,studyId);
  
      res.status(201).json(newRecruit);
    } catch (error) {
      next(error);
    }
});

//모임 신청 취소하기
recruitRouter.delete("/:study_id", async (req, res, next) => {
    try {
      const userId = 2;
      const studyId = req.params.study_id;
      const deleteRecruit = await recruitService.deleteMyRecruit(userId,studyId);
  
      res.status(201).json(deleteRecruit);
    } catch (error) {
      next(error);
    }
});

//모임 환급 대상자 조회
recruitRouter.get("/:study_id", async (req, res, next) => {
    try {
      const studyId = req.params.study_id;
      const findPayBackUsers = await recruitService.getPayBackUsers(studyId);
  
      res.status(200).json(findPayBackUsers);
    } catch (error) {
      next(error);
    }
});

//모임 환급 대상자 일괄 변경
recruitRouter.patch("/all/:study_id", async (req, res, next) => {
    try {
      const studyId = req.params.study_id;
      const setPayBack = await recruitService.setPayBackUsers(studyId);
  
      res.status(201).json(setPayBack);
    } catch (error) {
      next(error);
    }
});

//모임 환급 대상자 지정 변경
recruitRouter.patch("/:study_id", async (req, res, next) => {
    try {
      const userIds = req.query.user;
      const payment_status = req.query.status;
      const data = {payment_status:payment_status}
      const studyId = req.params.study_id;
      const setPayBack = await recruitService.setPayBackUser(data,userIds,studyId);
  
      res.status(201).json(setPayBack);
    } catch (error) {
      next(error);
    }
});

  module.exports = recruitRouter;