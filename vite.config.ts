import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        //d:aplicaion/dist/
        index: resolve(__dirname, "index.html"),
        storeHome: resolve(__dirname, 'src/pages/store/home/home.html'),
        storeCart: resolve(__dirname, 'src/pages/store/cart/cart.html'),
        storeLogin: resolve(__dirname, 'src/pages/login/login.html'),
      },
    },
  },
  base: "./",
});
