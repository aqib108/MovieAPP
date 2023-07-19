<template>
    <div class="container-fluid content-row  bg-dark p-5">
       <h1 class="text-white text-center mb-5">Movies & TV</h1>
       <div class="row">
        <div class="col-md-10"> <input type="text" v-model="SearchTerm" class="form-control"   /></div>
        <div class="col-md-2"> <button @click="testMethod" class="btn btn-primary">Search</button></div>
        
       </div>
      
       
       <div v-if="movies?.length>0" class="row mt-3">
         <div  v-for="(movie,index) in movies" :key="index" class="col-md-3 pt-4">
          
          <div class="card h-100 w-100" style="width: 18rem;">
            <img  :src="movie?.Poster" />
 
  <div class="card-body">
    <h4>Title : {{ movie?.Title }}</h4>
    <h3>Type : {{ movie?.Type }}</h3>
    <h3>Year : {{ movie?.Year }}</h3>
    
  </div>
  <div class="card-footer">

    <NuxtLink class="btn btn-info" :to="{name:'detail',params:{movieId:movie?.imdbID}}">View More...</NuxtLink>
  
  </div>
</div>
         </div>
       </div>
    <div class="h4 mt-5" v-else>Your Search : {{ SearchTerm }}  Not Found</div>
  
    </div>
    
</template>
<script>

export default {
    
    data(){
        return{
            movies:[],
            url:'https://www.omdbapi.com/?apiKey=7c7d0692&s=',
            SearchTerm:'english'
      
        }
      },
    activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch()
      }
    },
    methods:{
      testMethod(){
        this.$fetch();
      }
    },

    async fetch() {     
    if(this.SearchTerm!==null){
        var movies = await fetch(`https://www.omdbapi.com/?apiKey=7c7d0692&s=${this.SearchTerm}`).then(res => res.json());
       this.movies = movies.Search;
      }else{
        var movies = await fetch(`https://www.omdbapi.com/?apiKey=7c7d0692&s=Batman`).then(res => res.json());
       this.movies = movies.Search;
      }
      
    }
}
</script>
