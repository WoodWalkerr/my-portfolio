// Shared handle to the smooth-scroll instance (null on reduced motion / before init)
let instance = null;
export const setLenis = (l) => {
  instance = l;
};
export const getLenis = () => instance;
