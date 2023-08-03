//package/index.js
import LicensePlateInput from "../package/license-plate-input/index.vue"; // 引入封装好的组件
// 一定要先给name赋值，这样后面的局部install和全局install方法才能读到同一个name
LicensePlateInput.name = 'LicensePlateInput'
let coms = [LicensePlateInput]
const install = function (Vue) {
    coms.forEach((com) => {
        Vue.component(com.name, com);
    });
};

export default install; // 这个方法以后再使用的时候可以被use调用
