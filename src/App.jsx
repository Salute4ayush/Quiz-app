import { useEffect, useMemo, useState } from 'react';
import './app.css';
import Trivia from './Component/Trivia';
import Timer from './Component/Timer';
import Start from './Component/Start';

function App() {
const [username, setUsername]=useState(null);
const [queNumber, setQueNumber]=useState(1);
const [stop,setStop]=useState(false);
const [earned, setEarned]= useState("$ 0")
const data=[
  {
    id:1,
    question:"What is the capital city of Australia?",
    answers:[
      {
        text:"Brisbane",
        correct:false,
      },
      {
        text:"Canberra",
        correct:true,
      },
      {
        text:"Melbourne",
        correct:false,
      },
      {
        text:"Sydney",
        correct:false,
      },
    ],
  },
  {
    id:2,
    question:"What is the chemical symbol for Gold?",
    answers:[
      {
        text:"Gd",
        correct:false,
      },
      {
        text:"Ag",
        correct:false,
      },
      {
        text:"Go",
        correct:false,
      },
      {
        text:"Au",
        correct:true,
      },
    ],
  },
  {
    id:3,
    question:"What is the tallest mountain in the world?",
    answers:[
      {
        text:"Mount Everest",
        correct:true,
      },
      {
        text:"K2",
        correct:false,
      },
      {
        text:"Mount Kilimanjaro",
        correct:false,
      },
      {
        text:"Denali",
        correct:true,
      },
    ],
  },
  {
    id:4,
    question:"Who discovered electricity?",
    answers:[
      {
        text:"Isaac Newton",
        correct:false,
      },
      {
        text:"Benjamin Franklin ",
        correct:true,
      },
      {
        text:"Michael Faraday",
        correct:false,
      },
      {
        text:" Nikola Tesla",
        correct:false,
      },
    ],
  },
  {
    id:5,
    question:"What is the biggest animal in the world?",
    answers:[
      {
        text:"Blue Whale",
        correct:true,
      },
      {
        text:"African Elephant",
        correct:false,
      },
      {
        text:"Saltwater Crocodile",
        correct:false,
      },
      {
        text:"White Rhinoceros",
        correct:false,
      },
    ],
  },
  {
    id:6,
    question:"What year did World War II end?",
    answers:[
      {
        text:"1941",
        correct:false,
      },
      {
        text:"1948",
        correct:false,
      },
      {
        text:"1945",
        correct:true,
      },
      {
        text:"1950",
        correct:false,
      },
    ],
  },
  {
    id:7,
    question:"Who was the first man to walk on the moon?",
    answers:[
      {
        text:"John Glenn",
        correct:false,
      },
      {
        text:" Yuri Gagarin",
        correct:false,
      },
      {
        text:"Neil Armstrong ",
        correct:true,
      },
      {
        text:"Buzz Aldrin",
        correct:false,
      },
    ],
  },
  {
    id:8,
    question:"What is the largest country in the world by area?",
    answers:[
      {
        text:"Canada",
        correct:false,
      },
      {
        text:"Australia",
        correct:false,
      },
      {
        text:"China",
        correct:false,
      },
      {
        text:"Russia",
        correct:true,
      },
    ],
  },
  {
    id:9,
    question:"What does NASA stand for",
    answers:[
      {
        text:"North American Satellite Association",
        correct:false,
      },
      {
        text:"National Aeronautics and Space Administration ",
        correct:true,
      },
      {
        text:" National Association of Space Astronauts",
        correct:false,
      },
      {
        text:"National American Space Association",
        correct:false,
      },
    ],
  },
  {
    id:10,
    question:"How many teeth does an adult human have?",
    answers:[
      {
        text:"28",
        correct:false,
      },
      {
        text:"30",
        correct:false,
      },
      {
        text:"22",
        correct:false,
      },
      {
        text:"32",
        correct:true,
      },
    ],
  },
]

  const moneyPyramid= useMemo(()=>
    [
      {id:1, money:'$ 100'},
      {id:2, money:'$ 200'},
      {id:3, money:'$ 300'},
      {id:4, money:'$ 500'},
      {id:5, money:'$ 1000'},
      {id:6, money:'$ 2000'},
      {id:7, money:'$ 4000'},
      {id:8, money:'$ 8000'},
      {id:9, money:'$ 16000'},
      {id:10, money:'$ 32000'},
      {id:11, money:'$ 64000'},
      {id:12, money:'$ 125000'},
      {id:13, money:'$ 250000'},
      {id:14, money:'$ 500000'},
      {id:15, money:'$ 1000000'},
    ].reverse(),
  []
);

  useEffect(()=>{
    queNumber>1 && setEarned(moneyPyramid.find(m=>m.id===queNumber-1).money)
  },[moneyPyramid, queNumber])

  return (
    <div className="app">
    {username?(
      <>
      <div className='main'>
        {stop? (
          <h1 className='endText'>You earned: {earned}</h1>
        ):(
        <>
        <div className='top'>
          <div className='timer'>
            <Timer setStop={setStop} queNumber={queNumber}/>
          </div>
        </div>
        <div className='bottom'>
          <Trivia
            data={data}
            setStop={setStop}
            queNumber={queNumber}
            setQueNumber={setQueNumber}
          />
        </div>
        </>
        )}
      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
        {
          moneyPyramid.map((val)=>(
          <li className={queNumber===val.id?"moneyListItem active":"moneyListItem"}>
            <span className='moneyListItemNumber'>{val.id}</span>
            <span className='moneyListItemAmount'>{val.money}</span>
          </li>
          ))
        }
        </ul>
      </div>
      </>
    ):<Start setUsername={setUsername}/>}

    </div>
  );
}

export default App;
