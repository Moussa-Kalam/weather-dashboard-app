const getDayAndTime = (date: string) => {
  const longDay = new Date(date).toLocaleString("en-US", { weekday: "long" });
  const shortDay = new Date(date).toLocaleString("en-US", { weekday: "short" });
  const time = new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return { longDay, shortDay, time };
};

export default getDayAndTime;
