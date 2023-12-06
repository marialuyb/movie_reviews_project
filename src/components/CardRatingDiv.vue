<template>
<div class="card_rating">
    <img src="../img/star0.svg" alt="" class="card_star">
    <img src="../img/star0.svg" alt="" class="card_star">
    <img src="../img/star0.svg" alt="" class="card_star">
    <img src="../img/star0.svg" alt="" class="card_star">
    <img src="../img/star0.svg" alt="" class="card_star">
</div>
<button class="card_button_read">Читать обзоры</button>
<button class="card_button_rate">Оценить фильм</button>
</template>
<style scoped>
.card_rating{
    width: 100px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 15px;
}
.card_button_read{
    border-radius: 10px;
    border: 0;
    width: 250px;
    height: 30px;
    margin-bottom: 5px;
    transition: 0.5s;
}
.card_button_read:hover{
    color: white;
    background: #2c146b;
}
.card_button_rate{
    color: white;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    background: linear-gradient(90deg, #2c146b 0%, #0e031d 100%);
    width: 250px;
    height: 30px;
    transition: 0.5s;
}
.card_button_rate:hover{
    color: white;
    background: #2c146b;
}
</style>