import sys 
import time
# import RPi.GPIO as GPIO

#GPIO.setmode(GPIO.BCM)
# Takes first name and last name via command  
# line arguments and then display them 

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

# #x motor
# GPIO.setup(4,GPIO.OUT)
# GPIO.output(4, GPIO.LOW)
# GPIO.setup(17,GPIO.OUT)
# GPIO.output(17, GPIO.HIGH)


# #yright
# GPIO.setup(27,GPIO.OUT)
# GPIO.output(27, GPIO.LOW)
# GPIO.setup(26,GPIO.OUT)
# GPIO.output(26, GPIO.HIGH)

# #yleft
# GPIO.setup(16,GPIO.OUT)
# GPIO.output(16, GPIO.LOW)
# GPIO.setup(12,GPIO.OUT)
# GPIO.output(12, GPIO.HIGH)

# #updown
# GPIO.setup(13,GPIO.OUT)
# GPIO.output(13, GPIO.LOW)
# GPIO.setup(19,GPIO.OUT)
# GPIO.output(19, GPIO.HIGH)

# #stir
# GPIO.setup(5,GPIO.OUT)
# GPIO.output(5, GPIO.LOW)
# GPIO.setup(6,GPIO.OUT)
# GPIO.output(6, GPIO.HIGH)



# #limit left
# GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP)
# #limit right
# GPIO.setup(25, GPIO.IN, pull_up_down=GPIO.PUD_UP)
# #limit plate
# GPIO.setup(22, GPIO.IN, pull_up_down=GPIO.PUD_UP)


WaitTime = 0.001

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

distanceFrom0to1 = 35
distanceFrom1to2 = 105
distanceFrom2to3 = 105
distanceFrom3to4 = 105
distanceFrom4to5 = 105
distanceFrom5to6 = 105

print('reset()')
print("goto slot1, pour "+sys.argv[1])
print("convert(distanceFrom0to1,1)")
if ml==0:
    print("do not pour from slot1")
    print("convert(distanceFrom1to2,1)")
else:
    print("upup()")
    print("down()")
    

print("slot2, pour "+sys.argv[2])
#print("convert(distanceFrom1to2,1)")
if ml1==0:
    print("do not pour from slot2")
    print("convert(distanceFrom2to3,1)")
else:
    print("upup()")
    print("down()")
    

print("slot3, pour "+sys.argv[3])
#print("convert(distanceFrom2to3,1)")
if ml2==0:
    print("do not pour from slot3")
    print("convert(distanceFrom3to4,1)")
else:
    print("upup()")
    print("down()")
    

print("slot4, pour "+sys.argv[4])
#print("convert(distanceFrom3to4,1)")
if ml3==0:
    print("do not pour from slot4")
    print("convert(distanceFrom4to5,1)")
else:
    print("upup()")
    print("down()")
    

print("goto slot5, pour "+sys.argv[5])
#print("convert(distanceFrom3to4,1)")
if ml4==0:
    print("do not pour from slot5")
    print("convert(distanceFrom5to6,1)")
else:
    print("upup()")
    print("down()")
    
print("goto slot6, pour "+sys.argv[6])
#print("convert(distanceFrom5to6,1)")
if ml5==0:
    print("do not pour from slot6")
    print("serve()")
else:
    print("upup()")
    print("down")
    print("serve()")




# def turnn():
    # GPIO.output(4,GPIO.HIGH)
	# time.sleep(WaitTime)
	# GPIO.output(4, GPIO.LOW)
	# time.sleep(WaitTime) 


# def upup(pulse):
#     GPIO.output(12, GPIO.HIGH)
#     GPIO.output(26, GPIO.HIGH)

#     for number in range(pulse):  
#         GPIO.output(16,GPIO.HIGH)
#         GPIO.output(27,GPIO.HIGH)
#         time.sleep(WaitTime)
#         GPIO.output(16, GPIO.LOW)
#         GPIO.output(27,GPIO.LOW)
#         time.sleep(WaitTime)

# def down(pulse):
#     GPIO.output(12, GPIO.LOW)
#     GPIO.output(26, GPIO.LOW)

#     for number in range(pulse):  
#         GPIO.output(16,GPIO.HIGH)
#         GPIO.output(27,GPIO.HIGH)
#         time.sleep(WaitTime)
#         GPIO.output(16, GPIO.LOW)
#         GPIO.output(27,GPIO.LOW)
#         time.sleep(WaitTime)


# 
# 	global x,y
# 	x=(rev*distance)/lead
# 	y=int(round(x))
# 	print(x)
# 	print(y)
    
# def convert(distance,direction):
    
#     if direction==1:
#         GPIO.output(17, GPIO.HIGH)
#     if direction==0:
#         GPIO.output(17, GPIO.LOW)   

    
#     for number in range(int(round((rev*distance)/lead))):
#         turnn()



# def reset():
#     print("res")
    # if GPIO.input(18)==1:
    #     GPIO.output(17,GPIO.HIGH)
    #     turnn()
    # if GPIO.input(18)==0: 
    #     GPIO.output(25, GPIO.LOW)


# def serve():
#     print("serve")
    # if GPIO.input(25)==1:
    #     GPIO.output(17,GPIO.LOW)
    #     turnn()
    # if GPIO.input(25)==0: 
    #     GPIO.output(4, GPIO.LOW)


# reset()
# convert(distanceFrom0to1,1)
#upup(1000)
#downn(1000)
#convert(distanceFrom1to2,1)
#upup(1000)
#downn(1000)
#convert(distanceFrom2to3,1)
#upup(1000)
#downn(1000)
#convert(distanceFrom3to4,1)
#upup(1000)
#downn(1000)
#convert(distanceFrom4to5,1)
#upup(1000)
#downn(1000)