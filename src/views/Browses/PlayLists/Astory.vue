<template>
    <div>
        A story
    </div>
</template>

<script>
import Axios  from 'axios'
export default {
    created(){
        Axios.get('/json/data.json')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    mounted() {
        // console.log(this.$route.query.id)
    },
}
</script>

<style scoped>
    div{
        color:white
    }
</style>