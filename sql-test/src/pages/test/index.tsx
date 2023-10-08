import React, { useState, useEffect } from "react";
import { Button, List, Skeleton } from "antd";
import { allLevels } from "../../utils/levels";

export const TestCription = () => {
  const data = allLevels.reduce((acc, curr) => {
    acc.push({ title: curr.title });
    return acc;
  }, [] as {title: string}[])
  return <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        actions={[<Button key="list-loadmore-edit">挑战</Button>]}
      >
        <span>{item.title}</span>
      </List.Item>
    )}
  />
};
