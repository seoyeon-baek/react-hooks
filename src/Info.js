import React, {useState} from "react";

const Info = () => {
  //component명의 첫번째가 대문자가 아닐 경우 useState에서 오류가 난다.
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = e => {
    setName(e.target.value); //e.target.value는 인풋태그에 입력되는 값
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
