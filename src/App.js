import { useState } from "react";
import "./App.css";

function App() {
  let [글제목] = useState(["남자코트 추천", "강남우동 맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button>글 수정</button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span onClick={() => 따봉변경(따봉 + 1)}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
