import { Graph } from "../../@types";

// 初始化M*N的二维数组
export const initArr = (width: number, height: number) => {
  return Array(height)
    .fill("")
    .map(() => Array(width).fill(" "));
};

// 将结果转换为字符串
export const graph2Str = (graph: Graph) => {
  const res = graph.map((item) => item.join("")).join("\n");
  return res;
};

// 数据缩放格式化
export const valueScale = (scale: number[], data: number[]) => {
  const [start, end] = scale;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  return data.map((item) =>
    Math.round(start + (end - start) * ((item - min) / range))
  );
};

// 坐标缩放格式化
export const coordinateScale = (scale: number[], data: number[]) => {
  const [start, end] = scale;
  const range = end - start;
  const gap = Math.floor(range / (data.length + 1));
  return data.map((item, index) => start + gap * (index + 1));
};
