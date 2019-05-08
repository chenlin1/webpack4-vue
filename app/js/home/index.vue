<template>
    <div class="home">
          <Header />
    </div>
</template>
<script>
 import Header from "../public/header.vue"

export default {
    components: {
        Header,
    },
}
</script>

<style lang="scss">
@import "../../css/reset.scss";
.home{
    font-size: 50px
}
</style>
