import UserService from "../services/userService";
import { StatusCodes } from "http-status-codes";

class UserController {
  /**회원가입 */
  static async addUser(req, res, next) {
    try {
      const { name, email, password } = req.body
  
      // req.body가 빈 객체일 경우, 에러 반환
      if (req.body === {}) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        )
      }
  
      const newUser = await UserService.addUser({
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
  }
  /**로그인 */
  static async getUser(req, res, next) {
    try {
      const { email, password } = req.body
  
      const user = await UserService.getUser({ email, password })
  
      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }
  
      res.status(200).send(user)
  
    } catch (error) {
      next(error)
    }
  }

  /**마이페이지 */
  static async detailUser(req, res, next) {
    try {
      const login_id = req.currentUserId
      const user = await UserService.detailUser({ login_id })
  
      res.status(200).send(user)
    } catch (error) {
      next(error)
    }
  }

  /**유저 정보 수정 */
  static async setUser(req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const { name, email, password, address } = req.body;
      const id = req.currentUserId;
      // body data 로부터 업데이트할 사용자 정보를 추출함.

      const toUpdate = { name, email, password, address };

      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await UserService.setUser({ id, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  /**회원탈퇴 */
  static async deleteUser(req, res, next) {
    try {
      const user_id = req.currentUserId;
      await UserService.deleteUser({ id: user_id })
  
      res.status(200).send('회원탈퇴가 완료되었습니다.')
    } catch (error) {
      next(error)
    }
  }
}

export default UserController;
