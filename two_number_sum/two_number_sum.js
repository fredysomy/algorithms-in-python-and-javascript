function twonumsum(list,sum){
    for(i=0;i<list.length;i++){
        for(j=i;j<list.length;j++){
            if(list[i]+list[j]==sum){
                console.log(list[i],list[j]);
            }
        }
    }
}
twonumsum([1,2,3,4,5,6,4,7],8)
