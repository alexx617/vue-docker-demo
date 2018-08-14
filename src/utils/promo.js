class base {
    constructor(act, opt) {
        this.act = act;
        this.opt = opt;
    }
    ready() {
        return this.getPromoConfigData();
    }
    getPromoConfigData(){
        console.log('=====')
    }
}
class PromoShareConfigV1 extends base {
    constructor(act, opt = {}) {
        opt = Object.assign(
            {},
            {
                activityInfoApiPath: "/zsb/master/common/getactivityinfo",
                schoolInfoApiPath: "/zsb/master/common/getschoolinfo",
                awardInfoApiPath: "/zsb/master/common/getaward"
            },
            opt
        );

        super(act, opt);
    }
    getPromoConfigData(){
        console.log('this.act')
        console.log(this.act)
        return this.act
    }
    genPopularizeGuideUrl(){
        console.log('=213=')
        return this.opt;
    }
}

const prmo = {
    '1':class prmo1 extends PromoShareConfigV1{
        constructor(act) {
            // super(act, {
            //     api: "/indexdetail"
            // });
            super();
            console.log(this);
            this.act_type = 1;
        }
    },
    '2':{
        name:'a2'
    },
}
export default prmo
