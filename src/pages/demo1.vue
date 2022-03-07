<template>
    <div>
        <h1 @click="handleClick">demo1</h1>
    </div>
</template>
<script>
export default {
    name: 'demo1',
    data() {
        return {}
    },
    components: {},
    methods: {
        handleClick(){
            console.log('click');
            throw new Error('12312')
        }
    },
}
</script>

<style scoped>
</style>