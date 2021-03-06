/**
 * Created by z on 2015/10/19.
 */

//获取数据
function fetchData(){
    d3.json("./data/data.json",function(json){
        console.log(json);
        var normalized=[];
        for(var i=0;i<json.length;i++) {
            var row=json[i];
            for(var j=0;j<7;j++){
                var newRow={};
                newRow.Year=row.income[j][0];
                newRow.Country=row.name;
                newRow.Imports=row.income[j][1];
                newRow.Exports=row.outcome[j][1];
                normalized.push(newRow);
            }
        }
        console.log(normalized);
        countriesGrouped=d3.nest()
            .key(function(d){return d.Year;})
            .entries(normalized);
        run();
        refreshIntervalId = setInterval(run, delay);
    })


}