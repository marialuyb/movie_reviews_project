<template>
  <footer>
    <div class="wrapper">
      <div class="header_link_block">
        <a href="mainpage.html" class="header_link">Жанры</a>
        <a href="mainpage.html" class="header_link">Подборки</a>
        <a href="mainpage.html" class="header_link">Новинки</a>
        <a href="mainpage.html" class="header_link">Топовые обзоры</a>
        <a href="mainpage.html" class="header_link">Войти</a>
      </div>
    </div>
  </footer>
</template>
<style scoped>
a {
  text-decoration: none;
  color: white;
  font-size: 12px;
}
footer {
  background: linear-gradient(90deg, #110818 0%, #13101d 100%);
  height: 100px;
}
.header_link_block {
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
