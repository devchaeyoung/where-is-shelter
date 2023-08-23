import { UserModel } from '../db/index.js'
import bcrypt from 'bcrypt'
import { v4 } from 'uuid'
import jwt from 'jsonwebtoken'


class UserService {
  /** 신규 유저 생성 함수*/
  static async addUser({ name, email, password }) {
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
  /** 유저 로그인 함수*/
  static async getUser({ email, password }) {
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

  /** 유저 마이페이지 함수*/
  static async detailUser({ id }) {
    const user = await UserModel.findById({ id })
  
    const name = user.name
    const address = user.address
    const count_visit = user.count_visit
  
    const userInfo = {
      name,
      address,
      count_visit,
    }
  
    return userInfo
  }

  /** 유저 정보 수정*/
  static async setUser({ id, toUpdate }) {
    let user = await UserModel.findById({ id })

    if (toUpdate.name) {
      const fieldToUpdate = "name";
      const newValue = toUpdate.name;
      user = await UserModel.update({ id, fieldToUpdate, newValue });
    }

    if (toUpdate.email) {
      const fieldToUpdate = "email";
      const newValue = toUpdate.email;
      user = await UserModel.update({ id, fieldToUpdate, newValue });
    }

    if (toUpdate.password) {
      const fieldToUpdate = "password";
      const newValue = await bcrypt.hash(toUpdate.password, 10);
      user = await UserModel.update({ id, fieldToUpdate, newValue });
    }

    if (toUpdate.address) {
      const fieldToUpdate = "address";
      const newValue = toUpdate.address;
      user = await UserModel.update({ id, fieldToUpdate, newValue });
    }

    return user;
  }

  /** 회원탈퇴 함수*/
  static async deleteUser({ id }) {
    const deletedUser = await UserModel.deleteById({ id })
    return deletedUser
  }
}

export default UserService;
