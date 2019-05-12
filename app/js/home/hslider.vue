<template>
   <div>
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
    </div>
</template>

<script>
import Slider from "../core/slider.vue";
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [
                {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t1/10297/24/14008/46685/5c862b47Eef810b58/30b8c5430103352a.jpg?width=750&height=320"
                },
                 {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg?width=750&height=320"
                },
                 {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320"
                }
            ],
            enters: [
                {
                    href: "download",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                    title: "优惠卷"
                },
                {
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                    title: "领福利"
                },
                {
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                    title: "抢钢镚"
                },
                {
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                    title: "白条提额"
                },
                {
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t1/36242/13/119/12214/5cb06492E0c73a66f/a284f91242e27af1.png?width=90&height=90",
                    title: "免费领京豆"
                }
            ],
        }
    }
}
</script>

<style lang="scss" module>
 @import "../../css/element.scss";
  .slider{
    margin-top: 120px;
    height:280px;
    background: red;
    img{
      width: 100%;
    }
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>

