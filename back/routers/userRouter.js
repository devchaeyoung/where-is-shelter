const { Router } = require('express')
const router = Router()
const { addUser, getUser, detailUser, deleteUser } = require('../services/userService')
const { login_required } = require('../middlewares/login_required')

// 신규유저 생성
router.post('/user/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    // req.body가 빈 객체일 경우, 에러 반환
    if (req.body === {}) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      )
    }

    const newUser = await addUser({
      name,
      email,
      password
    })

    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage)
    }

    res.status(200).send(newUser)
  } catch (error) {
    next(error)
  }
})

// 로그인 유저 정보 응답
router.get('/user/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await getUser({ email, password })

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).send(user)

  } catch (error) {
    next(error)
  }
})
// 유저 MyPage 정보 응답
router.get('/user/current', login_required, async (req, res, next) => {
  try {
    const login_id = req.currentUserId
    const user = await detailUser({ login_id })

    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
})

// 유저 회원탈퇴
router.delete('/user/:user_id', async (req, res, next) => {
  try {
    const { user_id } = req.params
    await deleteUser({ id: user_id })

    res.status(200).send('회원탈퇴가 완료되었습니다.')
  } catch (error) {
    next(error)
  }
})

module.exports = router;
