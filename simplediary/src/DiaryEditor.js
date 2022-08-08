// DiaryEditor에 필요한 영역
// 1. 작성자 폼 : 한줄로 작성되는 칸
// 2. 일기 본문 
// 3. 감정 점수
import { useState } from "react";


const DiaryEditor = () => {

    const [state, setState] = useState({
        author: '',
        content: '',
        emotion: 1,
    })
    // const [author, setAutor] = useState('')
    // const [content, setContent] = useState('')
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = () => {
        console.log(state);
        alert('저장성공!')
    }
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input
                value={state.author}
                onChange={handleChangeState}
                name="author"
                placeholder="작성자"
                type='text'
            />
        </div>
        <div>
            <textarea
                value={state.content}
                onChange={handleChangeState}
                name="content"
                placeholder="일기"
                type='text'
            />
            <div>
                <select name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    </div >
}

export default DiaryEditor;