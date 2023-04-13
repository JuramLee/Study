const { User } = require("../models");
const bcrypt = require("bcrypt");
// 암호화 라이브러리(복호화불가)

module.exports = {
  async signup(req, res, next) {
    /* 회원가입
			1. req.body.email이 현재 db에 있는지 확인
			2. 복호화가 불가능한 암호화. 단, 비교는 가능능
			3. 없으면 db에 데이터 추가
		 */
    const existUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "이미 사용중인 이메일입니다.",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(200).json({
      success: true,
      message: "축하드립니다. 회원가입에 성공하였습니다.",
    });
  },
};

// 실제 비지니스 로직
