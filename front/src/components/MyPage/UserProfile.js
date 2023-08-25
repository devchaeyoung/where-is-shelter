const MOCKUP_USER = {
  _id: 1,
  email: "elice@test.com",
  name: "엘리스",
  nickname: "엘리스",
  password: "1234",
  address: "서울 성수낙낙",
  count_visit: 0,
  description: "안녕하세요",
  profileImage: "1",
};
const user = MOCKUP_USER;

function UserProfile({ setIsEditing, isEditable }) {
  return (
    <div className="border-green-400 border-2 h-500">
      <div>
        <div className="bg-color-gray">
          <img
            style={{ width: "18rem" }}
            src={
              user?.profileImage
                ? user.profileImage
                : "http://placekitten.com/200/200"
            }
            alt="profile"
          />
        </div>
        <p>{user?.nickname}</p>
        <p>{user?.email}</p>
        <p>{user?.description}</p>

        {isEditable && (
          <div>
            <button
              className="bg-sky-500/100"
              onClick={() => setIsEditing(true)}
            >
              편집
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
