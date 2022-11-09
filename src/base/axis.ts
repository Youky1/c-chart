import { drawLine } from "./util";
export const drawAxisVertical = (
  graph: Graph,
  width: number,
  height: number
) => {
  const bottom = height - 1;
  const right = width - 1;
  // 原点、坐标轴终点箭头
  graph[bottom][0] = "+";
  graph[0][0] = "↑";
  graph[bottom][right] = "→";

  // 横轴
  drawLine(graph, "-", [bottom, 1], [bottom, right - 1]);

  // 纵轴
  drawLine(graph, "|", [1, 0], [bottom - 1, 0]);
};

export const drawAxisHorizontal = (
  graph: Graph,
  width: number,
  height: number
) => {
  const bottom = height - 1;
  const right = width - 1;
  // 原点、坐标轴终点箭头
  graph[0][0] = "+";
  graph[0][bottom] = "↓";
  graph[0][right] = "→";

  // 横轴
  drawLine(graph, "-", [0, 1], [0, right - 1]);

  // 纵轴
  drawLine(graph, "|", [1, 0], [bottom - 1, 0]);
};
