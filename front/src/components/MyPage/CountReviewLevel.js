/** 예시용입니다. 프론트 추가작업 시 자유롭게 변경해주세요. */
const REVIEW_LEVEL = [
  { title: "새싹", icone: "🌱" },
  { title: "가지", icone: "🌿" },
  { title: "열매", icone: "🍒" },
  { title: "나무", icone: "🌲" },
  { title: "숲", icone: "🌳🌳🌳" },
  { title: "지구 지킴이", icone: "👑" },
];

export default function CountReviewLevel({ reviewLength, setReviewLevel }) {
  //   const length = Object.values(reviewLength).filter((props) => props).length;
  return (
    <>
      <p className="text-m font-semi mt-2">
        {REVIEW_LEVEL?.title} {REVIEW_LEVEL?.icone}
      </p>
    </>
  );
}
