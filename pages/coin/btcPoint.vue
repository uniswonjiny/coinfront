<template>
    <div class="container">
        <breadcrumb :dataList="breadcrumb" />
            <div class="ps-product__content ps-product--detail">
                <div class="ps-product__title">
                    <a href.stop="#">BTC Point</a>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-4"><sub> 누적수입</sub></div>
                    <div class="col-8 text-right">
                        <small :style="{'color' : '#103178', 'font-weight' : '700'}">1.0BTC = 50,000,000<sup>현시세</sup> </small>
                    </div>
                </div>
                <div class="card border-0 text-center" >
                    <div class="card-body" :style="{'backgroundColor':'#103178'}">
                        <h3 class="text-white">
                            0.01547874785 <sub class="font-weight-bold">BTCP</sub>
                        </h3>
                        <h5 class="text-white">
                            (7,000,000 원)
                        </h5>
                    </div>
                </div>
                <div class="dropdown-divider"/>
                <small>BTC Point 잔고</small>
                <div class="card border-0 bg-light" >
                    <div class="card-body text-center">
                        <span class="display-1 font-weight-bold text-danger">
                            0.0005875968
                        </span>
                        <sub class="font-weight-bold" :style="{'color':'#103178 !important'}">BTCP</sub>
                    </div>
                    <div class="dropdown-divider"/>
                        <a
                            class="ps-btn ps-btn--warning"
                            href="#"
                            @click.prevent="dialog=!dialog"
                        >
                            수익출금
                        </a>
                    </div>
                <div class="dropdown-divider my-5"/>
                
                <div class="row">
                    <div class="col-6"><sub>입출고내역</sub></div>
                    <div class="col-6 text-right">
                        <select class="custom-select custom-select-sm text-right">
                            <option v-for="(item, index) in sortItems" value="item.value" :key="index">{{item.text}}</option>
                        </select>
                    </div>
                </div>
                <div class="dropdown-divider"/>
            <div v-for="(item, index ) in sellList" :key="index">
                    <div class="row" @click.prevent="detailDialogEvent(true ,item )">
                        <div class="col-3">
                            <div>{{item.type}} 
                            </div>
                            <small>{{item.text}}</small>
                        </div>
                        <div class="col-9 text-right">
                            <small :class="item.type === '입고' ? 'ps-product__price' : 'ps-product__del' ">{{item.currency}} <sub>{{item.unit}}</sub></small> 
                            <h4>{{item.total}}</h4> 
                        </div>
                    </div>
                    <div class="dropdown-divider"/>
                </div> 
                <button class="ps-btn ps-btn--primary mt-3 " >더보기</button>  
                <div class="dropdown-divider"/>
            </div>


    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import { mapState } from 'vuex';

export default {
    layout: 'coin',
    components: {
        Breadcrumb,
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/coin/uniMining',
                    text: 'Home'
                },
                {
                    url: '/coin/btcPoint',
                    text: 'BTC Point'
                }
            ],
            getSort: 'all',
            sortItems: [
                {
                    text: '전체',
                    value: 'all'
                },
                {
                    text: '입고',
                    value: 'buy'
                },
                {
                    text: '출고',
                    value: 'sell'
                }
            ],
            items: [
                {
                    text: '전체',
                    value: 'all'
                },{
                    text: '입고',
                    value: '1'
                },{
                    text: '출고',
                    value: '2'
                },
            ],
            sellList: [
                {
                    type:'출고',
                    currency:'0.10000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '확인중...',
                },
                {
                    type:'입고',
                    currency:'0.10000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '확인중...',
                },
                {
                    type:'출고',
                    currency:'0.13000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '2021.12.24 23:59:59',
                },
                {
                    type:'출고',
                    currency:'0.20000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '2021.12.23 23:00:59',
                },
                {
                    type:'입고',
                    currency:'0.20000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '2021.12.22 03:59:01',
                },

            ],
            sumInfo : {
                title: '구매금액',
                    captions : '최초수익발생일: 2021년12월12일 / 30일경과',
                    data: [
                        {
                            title: '총구매수량\n(UNI point)',
                            text: '10,000'
                        },
                        {
                            title: '누적 투자액\n(원)',
                            text: '3,000,000'
                        }
                    ]
            }
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
    },
    methods: {

    }
};
</script>
