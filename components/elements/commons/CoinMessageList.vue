<template>
    <div class="ps-blog--latset" v-if="item">
        <div class="ps-blog__content">
            <div class="ps-blog__meta">
                <span class="ps-blog__date">{{ item.created_at }}</span
                ><a class="ps-blog__author" href="#">{{ item.register }}</a>
            </div>
            <nuxt-link class="ps-blog__title" :to="`/coin/messageDetail${item.id}`">
                <div :class="item.read_at===1 ? 'readed' : '' ">

            {{
                item.name
            }}
                </div>
            </nuxt-link>
            <p class="ps-blog__desc" v-if="item.short_description">{{ item.short_description }}</p>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import Moment from "moment";

export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
};
</script>
