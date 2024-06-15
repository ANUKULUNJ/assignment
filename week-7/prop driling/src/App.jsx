import React from 'react';
import './App.css'
import { useRecoilState,useRecoilValue,RecoilRoot,useSetRecoilState } from 'recoil'
import { countAtom,evenselector} from "./store/atom/count"
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  );
}

function Count(){

  return (
    <div>
     <Countrender/>
      <Button/>
      
    </div>
  );
}
function Countrender(){
   const count = useRecoilValue(countAtom);
  return (
    <div>
      count {count}
      <CheckEven/>
    </div>
  );

}
function Button(){
     const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count=>count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count=>count - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}
function CheckEven(){
  const iseven = useRecoilValue(evenselector);
  return <div>
    {iseven?null:"it is even"}
  </div>

}
export default App
