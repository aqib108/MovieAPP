<template>
    <div class="container mt-5">
    <div class="col-lg-8 border p-3 main-section bg-dark text-white">
        <div class="row hedding m-0 pl-3 pt-0 pb-3">
           <div class="col-lg-10">{{ movie?.Title }}</div> 
           <div class="col-lg-2"><nuxt-link  class="btn btn-primary" to="/">Back to Home</nuxt-link></div> 
        </div>
        
        <div class="row m-0">
            <div class="col-lg-4 left-side-product-box pb-3">
                <img :src="movie?.Poster" class="border p-3">
            </div>
            <div class="col-lg-8">
                <div class="right-side-pro-detail border p-3 m-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <span>Actors</span>
                            <p class="m-0 p-0">{{ movie?.Actors }}</p>
                        </div>
                        <div class="col-lg-12">
                            <p class="m-0 p-0 price-pro">{{ movie?.BoxOffice }}</p>
                            <hr class="p-0 m-0">
                        </div>
                        <div class="col-lg-12 pt-2">
                            <h5>Movie Detail</h5>
                            <span>{{ movie?.Plot }}</span>
                            <hr class="m-0 pt-2 mt-2">
                        </div>
                        <div class="col-lg-12">
                            <p class="tag-section"><strong>Director : </strong>{{ movie?.Director }}</p>
                            <p class="tag-section"><strong>Country : </strong>{{ movie?.Country }}</p>
                            <p class="tag-section"><strong>Language : </strong>{{ movie?.Language }}</p>
                            <p class="tag-section"><strong>Genre : </strong>{{ movie?.Genre }}</p>
                            <p class="tag-section"><strong>Released : </strong>{{ movie?.Released }}</p>
                            <p class="tag-section"><strong>Writer : </strong>{{ movie?.Writer }}</p>
                            <p class="tag-section"><strong>Runtime : </strong>{{ movie?.Runtime }}</p>
                            <p class="tag-section"><strong>Year : </strong>{{ movie?.Year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    <div class="row m-5">
        <WatchMovie/>
    </div>
    </div>
    
</div>
</template>
<script>
import WatchMovie from '../components/WatchMovie.vue';
export default {
   components:{WatchMovie},
    data(){
        return{
            movie:{},
            url:`https://www.omdbapi.com/?apiKey=7c7d0692&i=${this.$route.params.movieId}`,
            
        }
      },
    
    async fetch() {
        var movies = await fetch(this.url).then(res => res.json());
        this.movie = movies;
    }
}
</script>
<style scoped>
body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #a74444
}

.hedding {
    font-size: 20px;
    color: #f8eded`;
}

.main-section {
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 5%);
}

.left-side-product-box img {
    width: 100%;
}

.left-side-product-box .sub-img img {
    margin-top: 5px;
    width: 83px;
    height: 100px;
}

.right-side-pro-detail span {
    font-size: 15px;
}

.right-side-pro-detail p {
    font-size: 25px;
    color: #fdf4f4;
}

.right-side-pro-detail .price-pro {
    color: #E45641;
}

.right-side-pro-detail .tag-section {
    font-size: 18px;
    color: #fbf3f1;
}

.pro-box-section .pro-box img {
    width: 100%;
    height: 200px;
}

@media (min-width:360px) and (max-width:640px) {
    .pro-box-section .pro-box img {
        height: auto;
    }
}
</style>