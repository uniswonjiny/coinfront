<template>
    <div class="container">
        <breadcrumb :dataList="breadcrumb" />
        <h4 :style="{'color':'#103178'}"> • UNI POINT 판매</h4>
        <div class="card border-0" :style="{'backgroundColor':'#103178' , 'color': 'white'}">
            <div class="card-body">
                <div class="row">
                    <div class="col-5 col-sm-3">잔고</div>
                    <div class="col-4 col-sm-7 col-md-8 text-right">19,235,789</div>
                    <div class="col-3 col-sm-2 col-md-1 text-right">UNIp</div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5 col-sm-3">
                        판매 가능 UNIp
                    </div>
                    <div class="col-4 col-sm-7 col-md-8 text-right">1,013,675</div>
                    <div class="col-3 col-sm-2 col-md-1 text-right">UNIp</div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5 col-sm-3">1 UNIPoint 가격</div>
                    <div class="col-4 col-sm-7 col-md-8 text-right">1,013,675</div>
                    <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
                </div>
            </div>
        </div>
        <div class="card border-0">
            <div class="card-body">
                <div class="row ">
                    <div class="col-6 col-sm-3 col-md-2">
                        <h4>
                            판매수량 <button type="button" class="btn btn-outline-danger btn-sm py-0">All</button>
                        </h4>
                    </div>
                    <div class="col-6 col-sm-9 col-md-10">
                        <v-text-field
                            label="숫자만 입력해주세요"
                            flat
                            dense
                            hide-details="auto" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="card border-0" :style="{'backgroundColor':'#103178' , 'color': 'white'}">
            <div class="card-body">
                <div class="row">
                    <div class="col-5 col-sm-3">판매금액</div>
                    <div class="col-4 col-sm-7 col-md-8 text-right">9,000,000</div>
                    <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5 col-sm-3 text-right">
                        <sub> 판매수수료</sub>
                    </div>
                    <div class="col-4 col-sm-7 col-md-8 text-right">5,000</div>
                    <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5 col-sm-3">입금금액</div>
                    <div class="col-4 col-sm-7 col-md-8 text-right">8,756,581</div>
                    <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-3 col-sm-3 my-auto">출금계좌</div>
                    <div class="col-6 col-sm-7 col-md-8 text-center">
                        <small>카카오뱅크</small>
                        <div>11111-55-99-555</div> 
                    </div>
                    <div class="col-3 col-sm-2 col-md-1 my-auto text-right">김희원</div>
                </div>
            </div>
        </div>
        <div class="dropdown-divider"/>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
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
                    url: '/coin/sellUniPoint',
                    text: 'UNI POINT 판매'
                }
            ],
        }
    }
}
</script>

<style>

</style>