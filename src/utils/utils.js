// 通用插件方法

// import router from '../router';
import Vue from 'vue';

export default {
    // 页面跳转
    // $go: function (page, query) {
    //     if (page === -1) {
    //         return router.go(-1);
    //     }
    //     console.log(query);
    //     let route = { name: page };
    //     if (query) {
    //         route.query = query;
    //     }
       
    //     router.push(route);
    // },
    // // 无记录页面跳转
    // $goRep: function (page) {
    //     router.replace(page);
    // },

    $tip: function (message,duration = 3000) {
        Vue.prototype.$message({
            message,
            type: 'success',
            duration
        });
    },

    $err: function (message) {
        Vue.prototype.$message({
            message,
            type: 'warning'
        });
    }


}
