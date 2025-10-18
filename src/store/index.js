import { color, texture } from "three/tsl";
import { create } from "zustand";

// Helper functions for localStorage
// const getStoredValue = (key, defaultValue) => {
//   try {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : defaultValue;
//   } catch (error) {
//     console.error(`Error reading ${key} from localStorage:`, error);
//     return defaultValue;
//   }
// };

// const setStoredValue = (key, value) => {
//   try {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.error(`Error saving ${key} to localStorage:`, error);
//   }
// };

const useMacbookStore = create((set) => ({
  // Load from localStorage on init, fallback to defaults
  // color: getStoredValue("macbook-color", "#2e2c2e"),
  // setColor: (color) => {
  //   setStoredValue("macbook-color", color);
  //   set({ color });
  // },

  // scale: getStoredValue("macbook-scale", 0.08),
  // setScale: (scale) => {
  //   setStoredValue("macbook-scale", scale);
  //   set({ scale });
  // },

  color: "#2e2c2e",
  setColor: (color) => set({ color }),
  scale: 0.08,
  setScale: (scale) => set({ scale }),
  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () => {
    // setStoredValue("macbook-color", "#2e2c2e");
    // setStoredValue("macbook-scale", 0.08);
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" });
  },
}));

export default useMacbookStore;
