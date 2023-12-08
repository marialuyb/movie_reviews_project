<template>
  <HeaderBlock />
  <MainBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "./components/HeaderBlock.vue";
import MainBlock from "./components/MainBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";
export default {
  name: "App",
  components: {
    HeaderBlock,
    MainBlock,
    FooterBlock,
  },
};
</script>

<style>
#app {
  font-family: Open sans-serif;
  color: rgb(255, 255, 255);
  background: linear-gradient(90deg, #0e031d 0%, #2c146b 100%);
}
@font-face {
  font-family: Open sans-serif;
  src: url("./assets/OpenSans-VariableFont_wdth,wght.ttf");
}
html {
  background: linear-gradient(90deg, #0e031d 0%, #2c146b 100%);
  color: rgb(255, 255, 255);
  font-family: Open sans-serif;
  font-weight: 400;
  width: 100%;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  width: 100%;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: white;
  font-size: 12px;
}
h1 {
  font-size: 18px;
}
h2 {
  font-size: 16px;
}
h3 {
  font-size: 8px;
}
.wrapper {
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
</style>
