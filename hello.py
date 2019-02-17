import sys 
import time
""" import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

#motor
GPIO.setup(25,GPIO.OUT)
GPIO.output(25, GPIO.HIGH)
#direction
GPIO.setup(17,GPIO.OUT)
#switch
GPIO.setup(4, GPIO.IN, pull_up_down=GPIO.PUD_UP) #pulled up
GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP) #pulled up """

""" WaitTime = 0.001

# Takes first name and last name via command  
# line arguments and then display them 
print("Output from Python") 
print("First name: " + sys.argv[1] + sys.argv[2] + sys.argv[3] + sys.argv[4] + sys.argv[5]+ sys.argv[6] ) """



def turnn():
    print("turn motor")
""" GPIO.output(25,GPIO.HIGH)
	time.sleep(WaitTime)
	GPIO.output(25, GPIO.LOW)
	time.sleep(WaitTime) """ 

def limit():
    """ while True:
	if GPIO.input(4)==1:
		turnn()
	if GPIO.input(4)==0:
		GPIO.output(25, GPIO.LOW)
		GPIO.output(17,GPIO.LOW)
		turnn()
	if GPIO.input(18)==0:
		GPIO.output(25, GPIO.LOW)
		GPIO.output(17,GPIO.HIGH)
		turnn()""" 
    print("limit")

""" def upup():
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

""" def downn():
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


distance = 0
lead = 8
rev=200
pitch=2 #mm, pitch
time=50 #ms

def convert(distance):
	global x,y
	x=(rev*distance)/lead
	y=int(round(x))
	print(x)
	print(y)
	for number in range(y):
		print('larga')


sys.argv[1]
pos1 = 0
pos2 = 0
pos3 = 0
pos4 = 0
pos5 = 0
pos6 = 0

print("Output from Python") 
print("move to slot: " + sys.argv[1]) 
print("move to slot: " + sys.argv[2]) 
print("move to slot: " + sys.argv[3])
print("move to slot:  " + sys.argv[4])  
print("move to slot: " + sys.argv[5]) 
print("move to slot: " + sys.argv[6])