function runAsync(data){
    var p = new Promise(
        function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            resolve(data);
        }, 2000);
    });
    return p;
}
var datas = {}
runAsync(123).then(function (data)
{
    console.log(data)
    datas["key"] = data
    console.log(datas)
    return runAsync(4565)
}).then(function (data) {
    datas['1'] = data
    console.log(datas)
})
