<template>
    <div class="home">
          <Header />
          <Slider />
          <Novice />
          <Borrow />
          <Money />
          <Product />
          <Life />
          <Footer />
          <Navbar />
    </div>
</template>
<script>
 import Header from "../public/header.vue";
 import Footer from "../public/footer.vue";
 import Navbar from "../public/navbar.vue";
 import Slider from "./hslider.vue";
 import Novice from "./novice.vue";
 import Borrow from "./borrow.vue";
 import Money from "./money.vue";
 import Product from "./product.vue";
 import Life from "./life.vue";

export default {
    components: {
        Header,
        Slider,
        Novice,
        Borrow, 
        Money,
        Product,
        Life,
        Footer,
        Navbar,
    },
}
</script>

<style lang="scss">
@import "../../css/reset.scss";
.home{
    font-size: 50px
}
</style>
