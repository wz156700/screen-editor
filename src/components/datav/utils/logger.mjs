function e(r) {
  const n = `[DataV - ${r}]`;
  return {
    info(...o) {
      console.log(`${n} ${o.join(" ")}`);
    },
    warn(...o) {
      console.warn(`${n} ${o.join(" ")}`);
    },
    error(...o) {
      console.error(`${n} ${o.join(" ")}`);
    }
  };
}
export {
  e as withPrefix
};
