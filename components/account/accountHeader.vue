<template>
    <div>
        <div class="ps-form__title mb-0">
            <nuxt-link class="ps-footer__link" :to="this.beforeUrl">
                <i class="fa fa-chevron-left"/>
            </nuxt-link>
            {{title}}
        </div>
        <hr/>
    </div>
</template>

<script>
export default {
    props: {
        beforeUrl: String,
        title: String
    }
        
    
}
</script>

<style lang="scss" scoped>
    hr {
        border-top: 4px solid #103178;  
    }
</style>
