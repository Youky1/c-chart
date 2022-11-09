import { drawAxisVertical, drawAxisHorizontal } from "../utils/axis";
import { initArr, normalize } from "../utils/data";
import { Graph, Options } from "../../@types";
import { VERTICAL, UNDERSCORE, POINT } from "../const";
import { drawLine } from "../utils/line";

const drawPillarHorizontal = (graph: Graph, center: number, len: number) => {
  const left = 1,
    right = len;
  drawLine(graph, UNDERSCORE, [center - 1, left], [center - 1, right]);
  drawLine(graph, UNDERSCORE, [center, left], [center, right]);
  graph[center][right + 1] = VERTICAL;
};

const drawPillarVertical = (graph: Graph, center: number, len: number) => {
  const bottom = graph.length - 2;
  const top = bottom - len + 1;
  drawLine(graph, VERTICAL, [bottom, center - 1], [top, center - 1]);
  drawLine(graph, VERTICAL, [bottom, center + 1], [top, center + 1]);
  graph[top - 1][center] = UNDERSCORE;
  graph[bottom + 1][center] = POINT;
};

/**
 * 绘制柱状图，默认横向
 */
const drawBar = (option: Options) => {
  let {
    size: { width = 40, height = 10 } = {},
    direction = "x",
    data
  } = option;

  // 如果传入的width和height不符合最小宽高要求，重新赋值并提示
  const minWidth = data.length * 3 + 3;
  const minHeight = data.length * 3 + 2;
  if (direction === "x" && height < minHeight) {
    height = minHeight;
    if (option?.size?.height) {
      console.log(`height is not enough, change to ${height}`);
    }
  }
  if (direction === "y" && width < minWidth) {
    width = minWidth;
    if (option?.size?.width) {
      console.log(`width is not enough, change to ${width}`);
    }
  }

  const graph = initArr(width, height);
  if (direction === "x") {
    drawAxisHorizontal(graph, width, height);

    // 柱状图的值格式化
    const normalized = normalize([1, width - 2], data);
    // 坐标在纵轴上格式化
    const coordinate = normalize(
      [2, height - 2],
      data.map((item, index) => index + 1)
    );
    coordinate.forEach((center, index) => {
      drawPillarHorizontal(graph, center, normalized[index]);
    });
  } else {
    drawAxisVertical(graph, width, height);

    const normalized = normalize([1, height - 2], data);
    const coordinate = normalize(
      [2, width - 3],
      data.map((item, index) => index + 1)
    );
    coordinate.forEach((center, index) => {
      drawPillarVertical(graph, center, normalized[index]);
    });
  }
  return graph;
};

export default drawBar;
