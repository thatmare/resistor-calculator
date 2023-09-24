export function formatNumber(n) {
  if (n >= 1e9) {
    return `${(n / 1e9).toFixed(1)}G`;
  } else if (n >= 1e6) {
    return `${(n / 1e6).toFixed(1)}M`;
  } else if (n >= 1e3) {
    return `${(n / 1e3).toFixed(1)}K`;
  } else {
    return n.toFixed(2);
  }
}
