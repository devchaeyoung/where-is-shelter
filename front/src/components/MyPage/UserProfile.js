import CountReviewLevel from "./CountReviewLevel";

/** 예시용입니다. 프론트 추가작업 시 자유롭게 변경해주세요. */
const REVIEW_LEVEL = [
  { title: "새싹", icone: "🌱" },
  { title: "가지", icone: "🌿" },
  { title: "열매", icone: "🍒" },
  { title: "나무", icone: "🌲" },
  { title: "숲", icone: "🌳🌳🌳" },
  { title: "지구 지킴이", icone: "👑" },
];

const NO_IMAGE =
  "https://velog.velcdn.com/images/xiu_8/post/1fe5206b-f226-46b1-8f8a-6ed9d29a55bf/image.png";

function UserProfile({
  user,
  profileImage,
  isEdit,
  handleChangeEdit,
  setIsEdit,
  setReviewLevel,
  handleSubmit,
  handleFileChange,
}) {
  return (
    <>
      {isEdit ? (
        <>
          <p className="text-xl h-12 font-bold mt-0">
            {user?.name}님 반갑습니다!
          </p>
          <ul className="marker:text-green-400 list-disc pl-5 space-y-3 text-slate-400">
            <li className="mt-0 pt-0">
              쉼터 리뷰를 작성 시 ㅇㅇ등급이 올라갑니다.
            </li>
            <li className="mt-0">
              현재 {user?.name}님의 쉼터 리뷰작성 횟수는 {user?.count_visit}회
              입니다.
            </li>
          </ul>
          <form
            className="flex items-center space-x-6 mt-8"
            onChange={handleFileChange}
          >
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src={profileImage ? NO_IMAGE : user?.profileImage}
                alt={user?.nickname}
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-green-50 file:text-green-700
      hover:file:bg-green-100
    "
              />
            </label>
          </form>
          <div className="flex w-full">
            <div className="w-full h-full mt-10">
              <div className="flex items-center space-x-7 mt-8">
                <p className="grow-0 w-16 font-bold text-slate-400">별명</p>
                <input
                  type="text"
                  className="grow w-120 h-10 border-2 border-solid border-slate-400 rounded-xl mr-24 mt-1"
                  placeholdere={user?.nickname}
                />
              </div>
              <div className="flex items-center space-x-7 mt-8">
                <p className="grow-0 w-16 mt-5 font-bold text-slate-400">
                  한줄소개
                </p>
                <input
                  type="text"
                  className="grow w-120 h-10 border-2 border-solid border-slate-400 rounded-xl mr-24 mt-1"
                  placeholdere={user?.description}
                />
              </div>
              <div className="flex items-center space-x-7 mt-8">
                <p className="grow-0 w-16 mt-5 font-bold text-slate-400">
                  주소 변경
                </p>
                <input
                  type="text"
                  className="grow w-120 h-10 border-2 border-solid border-slate-400 rounded-xl mr-24 mt-1"
                  placeholdere="변경할 주소를 입력해주세요"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-full w-80 h-80 flex items-center justify-center overflow-hidden mb-8">
            <img
              src={user?.profileImage}
              alt={user?.nickname}
              className="w-full h-full"
            />
          </div>
          <div className="flex w-full">
            <div className="w-full h-full">
              <p className="text-xl h-10 font-bold mt-0">{user?.nickname}</p>
              <p className="mt-0">{user?.name}</p>
              <p className="text-m font-semi mt-2">{user?.description}</p>
              <CountReviewLevel setReviewLevel={setReviewLevel} />
            </div>
          </div>
        </>
      )}
      <div className="flex w-full relative">
        {isEdit ? (
          <form className="flex mt-3 text-center">
            <div>
              <button
                className="grow text-l font-bold mt-0 p-3 rounded-xl bg-green-300 hover:bg-green-600 absolute right-0"
                onClick={(e) => {
                  handleSubmit(e);
                  setIsEdit(false);
                }}
              >
                저장하기
              </button>
              <button
                className="grow text-l font-bold mt-0 p-3 rounded-xl bg-red-300 hover:bg-slate-400 absolute right-0"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                돌아가기
              </button>
            </div>
          </form>
        ) : (
          <button
            className="text-l font-bold mt-0 p-3 rounded-xl bg-green-300 hover:bg-green-600 absolute right-0"
            onClick={handleChangeEdit}
          >
            내 정보
          </button>
        )}
      </div>
    </>
  );
}

export default UserProfile;
