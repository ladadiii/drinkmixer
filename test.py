import sys 
import time
# Takes first name and last name via command  
# line arguments and then display them 
print("Output from Python") 
print("slot1 ml: " + sys.argv[1]) 
print("slot2 ml: " + sys.argv[2]) 
print("slot3 ml: " + sys.argv[3])
print("slot4 ml: " + sys.argv[4])  
print("slot5 ml: " + sys.argv[5]) 
print("slot6 ml: " + sys.argv[6])


lead = 8
rev=200
pitch=2 #mm, pitch
time=50 #ms

bot1 = 1
bot2 = 2
bot3 = 3
bot4 = 4
bot5 = 5
bot3 = 6

reset()
# convert()
# for number in range(y):
#     print(y)




def turnn():
    print("turn motor")
    # GPIO.output(25,GPIO.HIGH)
	# time.sleep(WaitTime)
	# GPIO.output(25, GPIO.LOW)
	# time.sleep(WaitTime) 




"""def convert(distance):
	global x,y
	x=(rev*distance)/lead
	y=int(round(x))
	print(x)
	print(y)"""
    




"""def limit():
    while True:
	if GPIO.input(4)==1:
		convert(bot1)
        convert(bot2)
        convert(bot3)
        convert(bot4)
        convert(bot5)
        convert(bot6)
	if GPIO.input(4)==0:
		GPIO.output(25, GPIO.LOW)
		GPIO.output(17,GPIO.LOW)
		turnn()
	if GPIO.input(18)==0:
		GPIO.output(25, GPIO.LOW)
		GPIO.output(17,GPIO.HIGH)
		turnn()""" 



"""def upup():
	print("push up")
    GPIO.output(17, GPIO.HIGH)
    GPIO.output(26, GPIO.HIGH)
    
    for number in range(2000):
	GPIO.output(23, GPIO.HIGH)
	GPIO.output(25, GPIO.HIGH)
	time.sleep(WaitTime)

	GPIO.output(23, GPIO.LOW)
	GPIO.output(25, GPIO.LOW)
	time.sleep(WaitTime)
    return """ 

"""def downn():
	print("down")
     GPIO.output(17, GPIO.LOW)
    GPIO.output(26, GPIO.LOW)
    
    for number in range(2500):
	GPIO.output(23, GPIO.HIGH)
	GPIO.output(25, GPIO.HIGH)
	time.sleep(WaitTime)

	GPIO.output(23, GPIO.LOW)
	GPIO.output(25, GPIO.LOW)
	time.sleep(WaitTime)
    return """


def reset():
    print("res")
    # if GPIO.input(18)==1:
    #     GPIO.output(17,GPIO.HIGH)
    #     turnn()
    # if GPIO.input(18)==0: 
    #     GPIO.output(25, GPIO.LOW)
