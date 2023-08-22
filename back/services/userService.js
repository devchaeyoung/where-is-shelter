const { VisitModel } = require('../db/index.js')
const { UserModel } = require('../db/index.js')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')
const jwt = require('jsonwebtoken')

/** 신규 유저 생성 함수
 * 
 * @param {*} param0 
 * @returns 
 */
const addUser = async ({ name, email, password }) => {
  const user = await UserModel.findByEmail({ email })
  if (user) {
    const errorMessage = "해당 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요"
    return errorMessage
  }
  // brypt를 활용한 패스워드 해쉬화
  const hashedPassword = await bcrypt.hash(password, 10)
  // uuid를 활용하여 user_id 생성
  const id = v4()
  const newUser = { id, name, email, password: hashedPassword }

  const createdNewUser = await UserModel.create({ newUser })
  return createdNewUser
}

/** 유저 로그인 함수
 * 
 * @param {*} param0 
 * @returns 
 */
const getUser = async ({ email, password }) => {
  const user = await UserModel.findByEmail({ email })
  if (!user) {
    const errorMessage = "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요."
    return errorMessage
  }
  // bcrypt로 해쉬화하여 db에 저장된 패스워드와 입력된 패스워드의 비교(유효성 검증)
  const correctPasswordHash = user.password
  const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash)
  if (!isPasswordCorrect) {
    const errorMessage = "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
    return errorMessage
  }
  // 입력 정보를 바탕으로 token 생성
  const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key"
  const token = jwt.sign({ user_id: user.id }, secretKey, { algorithm: process.env.JWT_ALG, expiresIn: process.env.JWT_EXP })

  const name = user.name
  const count_visit = user.count_visit

  const loginUser = {
    token,
    name,
    count_visit
  }

  return loginUser
}
// 유저 MyPage 함수
const detailUser = async ({ id }) => {
  const user = await UserModel.findById({ id })
  const like = await VisitModel.findByUserId({ id })

  const name = user.name
  const count_visit = user.count_visit
  // const like_shelter = like.shelter_id

  const userInfo = {
    name,
    count_visit,
    // like_shelter
  }

  return userInfo
}

const deleteUser = async ({ id }) => {
  const deletedUser = await UserModel.deleteById({ id })
  return deletedUser
}



module.exports = { addUser, getUser, detailUser, deleteUser } 