import QtQuick 2.5
import QtQuick.Controls 1.4

Item {

    id:root

        signal closepage(var trigger)

       Rectangle{
           anchors.fill: parent
           color:"lightgrey"
       }

       Column{
           anchors.centerIn: parent

           TextField{
               id:username
               placeholderText: "username"
           }
           TextField{
               id:password
               placeholderText: "password"
           }
           Button{
               text: "Submit"
               onClicked: {
                   console.log(password.displayText)
                   console.log(username.displayText)

                   if(password.displayText === "1" & username.displayText === "1"){
                       root.visible=false
                       console.log("access granted")
                   }

               }
           }
       }
}
