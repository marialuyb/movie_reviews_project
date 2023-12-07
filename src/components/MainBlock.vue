<template>
  <main>
    <div class="wrapper">
            <div class="search_field">
                <input type="text" class="search_input" placeholder="Гордость и предубеждение">
                <a href="" class="search_button">
                    <p class="search_button_p">Найти</p>
                </a>
            </div>
            <h1 class="main_heading">Главная страница</h1>
            <div class="film_cards">
                <a href = "./FilmPage.vue" class="card">
                    <img src="../img/f1.jpg" alt="" class="card_img">
                    <h2 class="card_head">Матрица: Перезагрузка</h2>
                        <!--Использую "img.card_star*5" для создания иконок-->
                    <CardRatingDiv/>
                </a>
                <a class="card">
                    <img src="../img/f2.jpg" alt="" class="card_img">
                    <h2 class="card_head">Области тьмы</h2>
                    <CardRatingDiv/>
                </a>
                <a class="card">
                    <img src="../img/f3.jpg" alt="" class="card_img">
                    <h2 class="card_head">Мэверик</h2>
                    <CardRatingDiv/>
                </a>
                <a class="card">
                    <img src="../img/f4.png" alt="" class="card_img">
                    <h2 class="card_head">21</h2>
                    <CardRatingDiv/>    
                </a>
            </div>     
        </div>
    </main>
</template>
<script>
import CardRatingDiv from './CardRatingDiv.vue' 
export default {
    name: 'App',
    components: {CardRatingDiv}
}
</script>
<style scoped>
main{
    margin-top: 50px;
}
.search_field{
    margin: 0 auto;
    width: 500px;
    height: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid white;
    border-radius: 10px;
}
.search_input{
    margin: 0 auto; 
    outline: none;
    width: 350px;
    height: 15px;
    border: 0;
    background: transparent;
    color: #ffffff;
    display: flex;
    justify-content: center;
}
.search_button{
    width: 120px;
    height: 30px;
    border-radius: 10px;
    background: white;
}
.search_button_p{
    color: #000000;
    margin: 0 auto;
    margin-top: 6px;
    text-align: center;
    text-decoration: none;
}
.main_heading{
margin-top: 50px;
}
.film_cards{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card{
    border-radius: 10px;
    width: 292.5px;
    height: 435px;
    background: linear-gradient(90deg, #110818 0%, #13101d 100%);
    text-align: center;
    transition: 0.2s;
}
.card:hover{
    transform: scale(1.02);
}
.card_img{
    border-radius: 10px;
    width: 250px;
    height: 250px;
    margin: 0;
    margin-top: 20px;
}
.card_head{
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>