<template>
    <div class="ps-noti" v-show="show">
        <div class="container">
            <p class="m-0">
                <strong>시스템 업그레이드 </strong>
                <br/>이달 10일 시스템 업그레이드가 있습니다.
                <br/>해당일에는 시스템이용에 제한이 있습니다.
            </p>
        </div>
        <a class="ps-noti__close" href="#" @click.prevent="show = false"><i class="icon-cross"></i></a>
    </div>
</template>

<script>
export default {
    props : ['show']
};
</script>
