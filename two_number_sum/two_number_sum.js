function twonumsum(list,sum){
    for(i=0;i<list.length;i++){
        for(j=i;j<list.length;j++){
            if(list[i]+list[j]==sum){
                console.log(list[i],list[j]);
            }
        }
    }
}
