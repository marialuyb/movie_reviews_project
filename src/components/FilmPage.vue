<template>
  <HeaderBlock/>
    <main>
    <div class="wrapper">
        <h1 class="main_heading">Матрица: Перезагрузка</h1>
        <div class="film_card">
            <div class="card">
                <img src="img/f1.jpg" alt="" class="card_img">
                <h2 class="card_head">Матрица: Перезагрузка</h2>
                <div class="card_rating">
                    <img src="img/star.png" alt="" class="card_star">
                    <img src="img/star.png" alt="" class="card_star">
                    <img src="img/star.png" alt="" class="card_star">
                    <img src="img/star.png" alt="" class="card_star">
                    <img src="img/star.png" alt="" class="card_star">
                </div>
            </div>
            <div class="card_descr">
                <h2>Описание фильма:</h2>
                <p class="descr_p">Борцы за свободу Нео, Тринити и Морфеус продолжают руководить восстанием людей против армии машин. Они вынуждены использовать не только арсенал превосходного оружия, но и свои выдающиеся навыки. Участие в миссии по спасению человеческой расы от истребления приносит им более глубокое понимание Матрицы и осознание центральной роли Нео в судьбе человечества.</p>
            </div>
            <div class="separator"></div>
            <div class="film_interaction">
                <button class="card_button_read">Добавить обзор</button>
                <button class="card_button_rate">Оценить фильм</button>
            </div>
        </div>   
    </div>
  </main>
</template>
<script>
import HeaderBlock from './HeaderBlock.vue' 
export default {
  name: 'App',
  components: {
    HeaderBlock
  }
}
</script>
<style scoped>
main{
    margin-top: 50px;
}
.main_heading{
    margin-top: 50px;
}
.film_card{
    margin-top: 20px;
    border-radius: 10px;
    width: 1200px;
    height: 400px;
    background: linear-gradient(90deg, #110818 0%, #13101d 100%);
    text-align: center;
    display: flex;
    flex-wrap: wrap;    
}
.card{
    margin-left: 20px;
    border-radius: 10px;
    width: 300px;
    height: 400px;
}
.card_descr{
    text-align: left;
    margin-left: 50px;
    margin-top: 40px;
    width: 400px;
}
.descr_p{
    text-align: justify;
}
.card_img{
    border-radius: 10px;
    width: 300px;
    height: 300px;
    margin: 0;
    margin-top: 20px;
}
.card_rating{
    width: 100px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 15px;
}
.card_head{
    margin-top: 10px;
    margin-bottom: 10px;
}
.separator{
    margin-left: 50px;
    width: 1px;
    height: 100%;
    background: #fff;
}
.film_interaction{
    width: 350px;
    margin-top: 150px;
}
.card_button_read{
    border-radius: 10px;
    border: 0;
    width: 250px;
    height: 30px;
    margin-bottom: 10px;
}
.card_button_rate{
    color: white;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    background: linear-gradient(90deg, #2c146b 0%, #0e031d 100%);;
    width: 250px;
    height: 30px;
}
</style>
