'use client'
import Link from "next/link";


export default function Home() {
  const 사과 = 'apple';
  console.log(사과);  
  const arrays = ['a','b','c']

  
  return (
    <div>
      <h1 className="text-blue-500">헬로</h1>
      <Link href="/list">상품목록페이지</Link>
      {arrays.map((array,index) => {
        return(
          <div key={index}>
            <h4>{index}.문자 출력:{array}</h4>
          </div>
        )
      })}
      <button onClick={() => {
        alert("알림");
      }}>버튼</button>
    </div>
  );
}