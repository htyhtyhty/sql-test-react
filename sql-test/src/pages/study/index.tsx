import React, { useState } from "react";
import { QuestionBoard } from "../../components/questionBoard";
export const StudyCription = () => {
  const [a, setA] = useState("4");
  return (
    <>
      <QuestionBoard />
    </>
  );
};
