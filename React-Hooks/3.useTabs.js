import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const content = [
    {
        tab: "Section1",
        contentTit: "I'm the content of the Section 1"
    },
    {
        tab: "Section2",
        contentTit: "I'm the content of the Section 2"
    },
    {
        tab: "Section3",
        contentTit: "I'm the content of the Section 3"
    }
];

const useTabs = (initialTab, allTabs) => {
    if(!allTabs || !Array.isArray(allTabs)){ //배열이 아닐때 true된다.
        return;
    }
    /* useState는 
    첫번째는 state를 초기화 시켜준다.
    두번째는 첫번째 currentIndex는 index가 될꺼다.
    그리고 아이템인 setCurrentIndex는 value를 바꿔준다.
    */
    const [currentIndex , setCurrentIndex ] = useState(initialTab)
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
};

const App = () => {
    const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
        {content.map((section, index) => (<button onClick={changeItem(index)}>{section.tab}</button>))}
        <div>
            {currentItem.contentTit}
        </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
