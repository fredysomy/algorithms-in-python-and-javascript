def twonumsum(list,sum):
    for i in range(0,len(list)):
        for j in range(i,len(list)):
            if list[i]+list[j]==sum:
                print(list[i],list[j])
twonumsum([1,2,3,4,5,6,4,7],8)
