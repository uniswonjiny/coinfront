<template>
  <div>
        <div class="ps-footer--top account-footer">
        <div class="container">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <p class="text-center"><nuxt-link class="ps-footer__link" :to="this.nextUrl"><i class="icon-wallet"></i>다음</nuxt-link></p>
                </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        nextUrl: String
    }
        
    
}
</script>

<style lang="scss" scoped>
    .account-footer {
        margin-bottom: 0px; 
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color:aliceblue;
    }
</style>

