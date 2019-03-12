#!/usr/bin/env python
# -*- coding: utf-8 -*-
#!/usr/bin/env python
#!/usr/bin/python
# Import required libraries
import sys
import time
import RPi.GPIO as GPIO

# Use BCM GPIO references
# instead of physical pin numbers
GPIO.setmode(GPIO.BCM)

ml = int(sys.argv[1])
ml1 = int(sys.argv[2])
ml2 = int(sys.argv[3])
ml3 = int(sys.argv[4])
ml4 = int(sys.argv[5])
ml5 = int(sys.argv[6])



print("Output from Python") 
print("slot1 ml: " + sys.argv[1]) 
print("slot2 ml: " + sys.argv[2]) 
print("slot3 ml: " + sys.argv[3])
print("slot4 ml: " + sys.argv[4])  
print("slot5 ml: " + sys.argv[5]) 
print("slot6 ml: " + sys.argv[6])

#right
GPIO.setup(27,GPIO.OUT)
GPIO.output(27,GPIO.HIGH)
GPIO.setup(22,GPIO.OUT)
GPIO.output(22,GPIO.HIGH)
#left
GPIO.setup(23,GPIO.OUT)
GPIO.output(23,GPIO.HIGH)
GPIO.setup(18,GPIO.OUT)
GPIO.output(18,GPIO.HIGH)
#x
GPIO.setup(4,GPIO.OUT)
GPIO.output(4,GPIO.HIGH)
GPIO.setup(17,GPIO.OUT)
GPIO.output(17,GPIO.HIGH)

#updown
GPIO.setup(25,GPIO.OUT)
GPIO.output(25,GPIO.HIGH)
GPIO.setup(24,GPIO.OUT)
GPIO.output(24,GPIO.HIGH)
GPIO.setup(5,GPIO.OUT)
GPIO.output(5,GPIO.LOW)
GPIO.setup(12,GPIO.OUT)
GPIO.output(12,GPIO.LOW)

#stir
GPIO.setup(26,GPIO.OUT)
GPIO.output(26,GPIO.HIGH)
GPIO.setup(19,GPIO.OUT)
GPIO.output(19,GPIO.HIGH)
GPIO.setup(13,GPIO.OUT)
GPIO.output(13,GPIO.LOW)
GPIO.setup(6,GPIO.OUT)
GPIO.output(6,GPIO.LOW)



#switch
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP) #left
GPIO.setup(20, GPIO.IN, pull_up_down=GPIO.PUD_UP) #right

WaitTime = 0.0005
lead = 8
rev=200

distanceFrom0to1 = 5
distanceFrom1to2 = 105
distanceFrom2to3 = 100
distanceFrom3to4 = 105
distanceFrom4to5 = 105
distanceFrom5to6 = 105

def upup(pulse):
    GPIO.output(22,GPIO.HIGH)
    GPIO.output(18,GPIO.HIGH)
    for number in range(pulse):
	GPIO.output(27,GPIO.HIGH)
	GPIO.output(23,GPIO.HIGH)
	time.sleep(WaitTime)
	GPIO.output(27,GPIO.LOW)
	GPIO.output(23,GPIO.LOW)
	time.sleep(WaitTime)

        
def downn(pulse):
    GPIO.output(22,GPIO.LOW)
    GPIO.output(18,GPIO.LOW)
    for number in range(pulse):
	GPIO.output(27,GPIO.HIGH)
	GPIO.output(23,GPIO.HIGH)
	time.sleep(WaitTime)
	GPIO.output(27,GPIO.LOW)
	GPIO.output(23,GPIO.LOW)
	time.sleep(WaitTime)
	
def turnn():
    GPIO.output(4,GPIO.HIGH)
    time.sleep(WaitTime)
    GPIO.output(4, GPIO.LOW)
    time.sleep(WaitTime)
	    
def pushup():
	GPIO.output(24,GPIO.HIGH)
    for number in range(10000):
	GPIO.output(25,GPIO.HIGH)
	time.sleep(WaitTime)
	GPIO.output(25,GPIO.LOW)
	time.sleep(WaitTime)
	
def pushdown():
	GPIO.output(24,GPIO.LOW)
    for number in range(10000):
	GPIO.output(25,GPIO.HIGH)
	time.sleep(WaitTime)
	GPIO.output(25,GPIO.LOW)
	time.sleep(WaitTime)	

def stir():
	GPIO.output(19,GPIO.HIGH)
    for number in range(10000):
	GPIO.output(26,GPIO.HIGH)
	time.sleep(WaitTime)
	GPIO.output(26,GPIO.LOW)
	time.sleep(WaitTime)
		
		
def serve():
    while True:
	if GPIO.input(20)==1:
	    print("GPIO.output(17,GPIO.HIGH)")
	    GPIO.output(17,GPIO.HIGH)
	    turnn()
	if GPIO.input(20)==0:
	    print("GPIO.output(4, GPIO.LOW)")
	    GPIO.output(4, GPIO.LOW)
	    pushdown()
	    stir()
	    pushup()
	    
	    
def convert(distance,direction):
    if direction==1:
	GPIO.output(17, GPIO.HIGH)
    if direction==0:
	GPIO.output(17, GPIO.LOW)
    for number in range(int(round((rev*distance)/lead))):
	turnn()

def slot():
    convert(distanceFrom0to1,1)
    if ml==0:
	print("do not pour from slot1")
	#slot1()
    else:
	for number in range(ml):
	    upup(100)
	    downn(100)

def slot1():
    convert(distanceFrom1to2,1)
    if ml1==0:
	print("do not pour from slot2")
	#slot2()
    else:
	for number in range(ml1):
	    upup(100)
	    downn(100)
	    #slot2()
	    
def slot2():
    convert(distanceFrom2to3,1)
    if ml2==0:
	print("do not pour from slot3")
	#slot3()
    else:
	for number in range(ml2):
	    upup(100)
	    downn(100)
	    #slot3()
def slot3():
    convert(distanceFrom3to4,1)
    if ml3==0:
	print("do not pour from slot4")
	#slot4()
    else:
	for number in range(ml3):
	    upup(100)
	    downn(100)
	    #slot4()

def slot4():
    convert(distanceFrom4to5,1)
    if ml4==0:
	print("do not pour from slot5")
	#slot5()
    else:
	for number in range(ml4):
	    upup(100)
	    downn(100)
	    #slot5()
	    
	    
def slot5():
    convert(distanceFrom5to6,1)
    if ml==0:
	print("do not pour from slot6")
	#serve()
    else:
	for number in range(ml5):
	    upup(100)
	    downn(100)
	#serve()
	

def reset():
    while True:
	print("reset")
	if GPIO.input(16)==1:
	    GPIO.output(17,GPIO.LOW)
	    turnn()
	    #print("hiiiii")
	if GPIO.input(16)==0:
	    GPIO.output(4, GPIO.LOW)
	    print("goto slot1, pour "+sys.argv[1])
	    slot()
	    print("goto slot2, pour "+sys.argv[2])
	    slot1()
	    print("goto slot3, pour "+sys.argv[3])
	    slot2()
	    print("goto slot4, pour "+sys.argv[4])
	    slot3()
	    print("goto slot5, pour "+sys.argv[5])
	    slot4()
	    print("goto slot6, pour "+sys.argv[6])
	    slot5()
	    serve()
	    
	    
reset()
