import React, { useEffect, useState } from 'react'
import useSound from "use-sound";
// import play from "../Assets/play.wav"
// import corr from "../Assets/correct.wav"
// import wrong from "../Assets/wrong.wav"

export default function ({data,setStop,queNumber,setQueNumber})
 {  
  const [question,setQuestion]= useState(null);
  const [selectedAnswer,setSelectedAnswer]= useState(null);
  const [className,setClassName]= useState(null);
  // const [letPlay]= useSound(play);
  // const [correctAnswer]= useSound(corr);
  // const [wrongAnswer]= useSound(wrong);

  // useEffect(()=>{
  //   letPlay();
  // },[letPlay]);

  useEffect(()=>{
    setQuestion(data[queNumber-1]);
  },[data,queNumber]);


  const delay =(duration,callback)=>{
    setTimeout(()=>{
      callback();
    },duration);
  }

  const handleClick=(a)=>{
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000,()=>{
      setClassName(a.correct ? "answer correct" :"answer incorrect");
    });
    delay(6000,()=>{
      if(a.correct){
        setQueNumber((prev)=>prev+1);
        setSelectedAnswer(null);
      }
      else{
        setStop(true);
      }
    });
  }
  return (
    <div className='trivia'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {
          question?.answers.map((op)=>(
            <div className={selectedAnswer===op?className:"answer"} onClick={()=>handleClick(op)}>{op.text}</div>
          ))
        }
      </div>
    </div>
  )
}
