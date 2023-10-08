import React, {useState, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Button } from "antd";
import {
  vscDarkPlus,
  coyWithoutShadows,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  getCurrentLevel,
  getNextLevel,
  getPrevLevel,
  getSpecificLevel,
  allLevels,
} from "../../utils/levels";

const them = {
  dark: vscDarkPlus,
  light: coyWithoutShadows,
};

export const QuestionBoard = () => {
  const [currentLevel, setCurrentLevel] = useState(allLevels[0]);
  const [isShowPrev, setIsShowPrev] = useState(false);
  const [isShowNext, setIsShowNext] = useState(false);
  useEffect(() => {
    const num = getCurrentLevel(currentLevel);
    num > 0 && setIsShowPrev(true);
    num < allLevels.length - 1 && setIsShowNext(true);
  }, [currentLevel])
  const clickToPrev = () => {
    const num = getCurrentLevel(currentLevel);
    num > 0 && setCurrentLevel(getPrevLevel(currentLevel));
  }
  const clickToNext = () => {
    const num = getCurrentLevel(currentLevel);
    num < allLevels.length - 1 && setCurrentLevel(getNextLevel(currentLevel))
  }
  return (
    <>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                showLineNumbers={true}
                style={them.light}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {currentLevel.content}
      </ReactMarkdown>                                                             
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 50px 20px 50px'}}>
        {isShowPrev && <Button  onClick={clickToPrev}>上一关</Button>}
        {isShowNext && <Button type="primary" onClick={clickToNext}>下一关</Button>}
      </div>
    </>
  );
};
