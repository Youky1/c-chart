import { Options, Scatter } from "../../@types";
import { initArr, valueScale } from "../utils/data";
import { SCATTER } from "../const";
import { drawAxisVertical } from "../utils/axis";

const drawScatter = (option: Options<Scatter>) => {
  const { size: { width = 40, height = 10 } = {}, data } = option;
  const graph = initArr(width, height);
  drawAxisVertical(graph, width, height);
  const xData = data.map((item) => item[0]);
  const yData = data.map((item) => item[1]);
  const scaleX = valueScale([1, width - 2], xData);
  const scaleY = valueScale([1, height - 1], yData);
  for (let i = 0; i < data.length; i++) {
    graph[height - scaleY[i]][scaleX[i]] = SCATTER;
  }
  return graph;
};

export default drawScatter;
