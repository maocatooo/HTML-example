/**
 * 
 * @param {*} id dom 对象的id属性
 */
function my$(id){
    return document.getElementById(id)
}

/**
 * 
 * @param {*} className dom 对象的class属性
 * 返回list对象
 */
function myc$(className){
    return document.getElementsByClassName(className)
}