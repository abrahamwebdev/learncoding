#This will add n elements alternatively
def mixList(a, b,n):
	result = []
	while True:
	    try:
	    	for x in range(0,n):
	    		result.append(a.pop(0))
	    	for x in range(0,n):
	    		result.append(b.pop(0))
	    except IndexError:
	        break
	return result
a=[1,2,3,4,5]
b=[6,7,8,9]
n=2
print(mixList(a,b,n))

#Result
#[1, 2, 6, 7, 3, 4, 8, 9, 5]