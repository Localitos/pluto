export type Orientation = "landscape" | "portrait";

export const getImageOrientation = (src: string): Promise<Orientation> => {
  const img = new Image();
  img.src = src;

  return new Promise((resolve, reject) => {
    // eslint-disable-next-line unicorn/prefer-add-event-listener
    img.onerror = reject;

    // eslint-disable-next-line unicorn/prefer-add-event-listener
    img.onload = () => {
      if (img.naturalWidth < img.naturalHeight) {
        return resolve("portrait");
      }
      return resolve("landscape");
    };
  });
};
