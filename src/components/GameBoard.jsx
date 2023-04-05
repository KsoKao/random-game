import { useEffect, useState } from "react";

const GameBoard = () => {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  };

  const onClickCheck = () => {
    let checkNum = parseInt(choiceNum);
    // 1. 문자입력
    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요!");
      return;
    }
    // 2. 0 ~100 이외의 숫자
    if (0 > checkNum || checkNum >= 100) {
      setHint("숫자를 잘못 입력하였습니다!");
      return;
    }
    // 랜덤 숫자와 유저가 선택한 숫자 비교
    if (randomNum === checkNum) {
      setHint("정답입니다! 랜덤 값을 초기화 합니다");
      //   초기화
      setRandomNum(Math.floor(Math.random() * 100));
      setChoiceNum("");
    } else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
    } else if (randomNum < checkNum) {
      setHint(`정답은 ${checkNum}보다 낮은 숫자입니다.`);
    }
  };

  useEffect(() => console.log(`맞춰보세요.`), [randomNum]);
  useEffect(
    () => console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`),
    [choiceNum]
  );

  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <input
          className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
          value={choiceNum}
          onChange={onChangeChoice}
        />
        <button
          onClick={onClickCheck}
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
