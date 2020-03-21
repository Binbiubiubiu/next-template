/**
 * 计算百分比
 * @param current
 * @param total
 * @param digst
 */
export const getPercent = (current: number, total: number, digst = 2) =>
  +((current / total) * 100).toFixed(digst);
