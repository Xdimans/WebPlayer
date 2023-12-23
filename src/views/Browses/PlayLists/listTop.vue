<template>
    <div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            data:1
        }
    },
    methods:{},
    created(){
        this.data=this.$store.state.MusicList.data
        console.log(this.data)
    }
}
</script>

<style>

</style>