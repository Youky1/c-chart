import { Graph } from "../../@types";

// 直线填充元素
export const drawLine = (
  graph: Graph,
  content: string | number,
  start: [number, number],
  end: [number, number]
) => {
  if (start[0] === end[0]) {
    // 水平
    const from = Math.min(start[1], end[1]);
    const to = Math.max(start[1], end[1]);
    for (let i = from; i <= to; i++) {
      try {
        graph[start[0]][i] = content;
      } catch (e) {
        console.log(start[0], i);
      }
    }
  } else if (start[1] === end[1]) {
    // 垂直
    const from = Math.min(start[0], end[0]);
    const to = Math.max(start[0], end[0]);
    for (let i = from; i <= to; i++) {
      graph[i][start[1]] = content;
    }
  } else {
    throw new Error("Invalid data");
  }
};
