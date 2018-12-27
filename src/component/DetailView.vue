<template>
    <div id="detale">
        <navi></navi>
        <div style="height:calc(100% - 59px);overflow: auto;">
            <div class="bannan">
                <span>每天看点好内容</span>
                <span>急速下载</span>
                <span>打开</span>
            </div>
            <div class="info">
                <h6>如梦之梦<span>北京</span></h6>
                <div class="img">
                    <img src="https://img1.doubanio.com/pview/event_poster/hlarge/public/01d2da6e7ec2447.jpg" alt="">
                </div>
                <div class="time">
                    <span>时间:</span>
                    <div >
                        <p>2018-12-21 14:00:00</p>
                        <p>2018-12-25 23:40:00</p>
                    </div>
                </div>
                <div class="location">
                    地点：<span>北京 保利剧院 北京东城区东外南大街14号</span>
                </div>
                <div class="monny">
                    费用: <span>399元起</span>
                </div>
                <div class="type">
                    类型: <span>戏剧</span>
                </div>
                <div class="startend">
                    起始时间: <span>票牛</span>
                </div>
                <h2>活动详情</h2>
            </div>
        </div>

    </div>
</template>
 
<script>
import navi from '../components/nav'
export default {
    components:{navi}
}
</script>

<style lang="scss" scoped="">
#detale{
    width: 100%;
    .bannan{
        width: 100%;
        height: 85px;
        background: url(../assets/promotion_bg.jpg) no-repeat;
        background-size: 100% 85px;
        display: flex;
        align-items: center;
        span:nth-child(1){
            font-size: 14px;
            flex:1;
        }
        span:nth-child(2){
            display: inline-block;
            width: auto;
            height: 28px;
            text-align: center;
            padding: 0 15px;
            background: #42bd56;
            border-radius: 5px;
            color: #fff;
            line-height: 28px;
            border: 1px solid #42bd56;
            letter-spacing: 2px;
        }
        span:nth-child(3){
            display: inline-block;
            width: auto;
            padding: 0 15px;
            font-size: 14px;
            font-weight: bold;
            line-height: 2;
            border: 1px solid #42bd56;
            border-radius: 5px;
            color: #42bd56;
            margin: 0 10px;
        }        
    }
    .info{
        margin: 12px;
        h6{
            text-align: left;
            font-size: 16px;
            font-weight: 800;
            margin: 20px 0;
            span{
                display: inline-block;
                width: auto;
                padding: 0px 5px;
                background: #FF8263;
                border-radius: 3px;
                color: #fff;
                font-size: 14px;
                font-weight: 100;
                margin: 0 10px;
            }
        }
    }
    .img{
        margin: 20px auto;
        text-align: center;
        img{
            width: 100%;
            max-width: 220px;
            height: auto;
        }
    }
    .time{
        margin: 10px 0;
        display: flex;
        align-items: center;
        font-size: 14px;
        div{
            margin: 0 10px;
        }
    }
    .location,.monny,.type,.monny,.startend{
        margin: 10px 0;
        font-size: 14px;
        text-align: left
    }
    h2{
        text-align: left;
        font-size: 18px;
        font-weight: 900;
        color: #072;
    }
}
</style>


