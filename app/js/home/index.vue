<template>
    <div class="home">
          <Header />
          <Slider />
    </div>
</template>
<script>
 import Header from "../public/header.vue"
 import Slider from "./hslider.vue"

export default {
    components: {
        Header,
        Slider,
    },
}
</script>

<style lang="scss">
@import "../../css/reset.scss";
.home{
    font-size: 50px
}
</style>
