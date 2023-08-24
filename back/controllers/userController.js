import UserService from "../services/userService";
import { StatusCodes } from "http-status-codes";

class UserController {
  /**회원가입 */
  static async addUser(req, res, next) {
    try {
      const { name, nickName, email, password } = req.body
  
      // req.body가 빈 객체일 경우, 에러 반환
      if (req.body === {}) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        )
      }
  
      const newUser = await UserService.addUser({
        name,
        nickName,
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
      const id = req.currentUserId
      const user = await UserService.detailUser({ id })
  
      res.status(200).send(user)
    } catch (error) {
      next(error)
    }
  }

  /**유저 정보 수정 */
  static async setUser(req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const { name, nickName, email, password, address } = req.body;
      const id = req.currentUserId;
      // body data 로부터 업데이트할 사용자 정보를 추출함.

      const toUpdate = { name, nickName, email, password, address };

      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await UserService.setUser({ id, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).send('유저 정보가 수정되었습니다.');
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

  // static async kakaoLogin(req, res, next) {
  //   const code = req.query.code
  //   try {
  //     const accessTokenGet = await Axios.post('https://kauth.kakao.com/oauth/token', {}, {
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       params: {
  //         grant_type: 'authorization_code',
  //         client_id: CONFIG.KAKAO.RESTAPIKEY,
  //         code,
  //         redirect_uri: 'localhost:5000/user/auth/kakao'
  //       }
  //     })

  //     const getKakaoUserInfo = await Axios.post('https://kapi.kakao.com/v2/user/me', {}, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         'Authorization': 'Bearer ' + accessTokenGet.data.access_token
  //       }
  //     })
  //     console.log(getKakaoUserInfo.data)

  //     const KakaoUserInfo = getKakaoUserInfo.data
  //     const 
  //     if () {

  //       res.send(token)
  //     } else {

  //     }
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}

export default UserController;
