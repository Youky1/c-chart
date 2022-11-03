export const initArr = (width: number, height: number) => {
  return Array(height)
    .fill("")
    .map(() => Array(width).fill(" "));
};

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
      graph[start[0]][i] = content;
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

export const draw = (graph: Graph) => {
  const res = graph.map((item) => item.join("")).join("\n");
  console.log(`\n${res}\n`);
};
