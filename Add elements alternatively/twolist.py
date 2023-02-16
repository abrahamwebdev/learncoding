#This will add element one by one alternatively
def mixList(a, b):
	result = []
	while True:
	    try:
	        result.append(a.pop(0))
	        result.append(b.pop(0))
	    except IndexError:
	        break
	return result
a=[1,2,3,4,5]
b=[6,7,8,9]
print(mixList(a,b))

#Result
#[1, 6, 2, 7, 3, 8, 4, 9, 5]