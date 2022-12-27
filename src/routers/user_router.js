const express = require("express");
const userRouter = express.Router();
//const { Router } = require("express");
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
const { loginRequired } = require("../middlewares/login_required");
const { userService } = require("../service");
const { userTagService } = require("../service");


// 회원가입 api
userRouter.post("/", async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const pw = req.body.pw;
    const nickname = req.body.nickname;
    const email = req.body.email;
    const introduce = req.body.introduce;
    const tag = req.body.tag;
    
    
    //위 데이터를 유저 db에 추가하기
    const newUser = await userService.addUser({
      user_id,
      pw,
      nickname,
      email,
      introduce
    });
    
    const userid = newUser.id
    await userTagService.addUserTag(tag, userid);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});




// 로그인
userRouter.post("/login", async (req, res, next) => {
  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.

    // req (request) 에서 데이터 가져오기
    const user_id = req.body.user_id;
    const pw = req.body.pw;

    // 로그인 진행 (로그인 성공 시 jwt 토큰을 프론트에 보내 줌)
    const userToken = await userService.getUserToken({ user_id, pw });

    // jwt 토큰을 프론트에 보냄 (jwt 토큰은, 문자열임)
    res.status(200).json(userToken);
  } catch (error) {
    next(error);
  }
});





//회원 본인 정보 조회
userRouter.get("/", loginRequired, async function (req, res, next) {
  try {
    const userId = req.userId;
    const currentUserInfo = await userService.getUserData(userId);
    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});







// 회원 정보 수정
userRouter.patch("/",loginRequired,/*upload.single('profile_image'),*/ async (req, res, next) => {
  try {
    const { nickname, email, introduce, profile_image, pw, point } = req.body;
    //const { checkPassword } = req.body;

    // if (!checkPassword) {
    //   throw new Error("정보를 변경하려면, 현재의 비밀번호가 필요합니다.");
    // }
    const id = req.userId;

    const userInfoRequired = { id, /*checkPassword*/ };
    const updateData = {
      ...(nickname && { nickname }),
      ...(email && { email }),
      ...(introduce && { introduce }),
      ...(profile_image && { profile_image }),
      ...(pw && { pw }),
      ...(point && { point }),
    };

    // const profile_image = req.file.location;

    //사용자 정보를 업데이트함.
    const updatedUserInfo = await userService.setUser(
      userInfoRequired,
      updateData
    );

    // 업데이트 이후의 유저 데이터를 프론트에 보내 줌
    res.status(200).json(updatedUserInfo);
  } catch (error) {
    next(error);
  }
});



//회원탈퇴
userRouter.delete("/", loginRequired, async function (req, res, next) {
    try {
      const id = req.userId;
      //const id = 2;
      const deleteResult = await userService.deleteUserData(id);
      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  }
);




module.exports = userRouter;

