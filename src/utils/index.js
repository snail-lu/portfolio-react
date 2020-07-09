//这里存放工具函数

//生成从0~n-1的数组
export const generatorArray = (n) => {
    return [...(new Array(n).keys())];
}