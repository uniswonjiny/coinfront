<template>
  <div class="ps-blog--latset" v-if="item">
    <div class="ps-blog__content">
      <div class="ps-blog__meta">
        <small class="ps-blog__author" href="#"><span class="has-badge">New</span>
          &nbsp;&nbsp;({{ item.saw_flag === 1 ? '확인' : '미확인' }} 공지)</small>
        <span class="ps-blog__date"> &nbsp;&nbsp;{{ item.created_at }}</span>
      </div>

      <span class="ps-blog__desc">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  }
};
</script>
