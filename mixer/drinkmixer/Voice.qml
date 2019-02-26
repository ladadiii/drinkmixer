import QtQuick 2.5
import QtQuick.Controls 1.4

Item {

        signal closepage1(var trigger)

    Rectangle{
        anchors.fill: parent
        color:"lightgrey"
        Text {
            x: 266
            y: 196
            text: qsTr("i am listening")
        }
    }

    Button{
        x: 8
        y: 8
        text: "back"
        onClicked: {
            console.log("back")
            closepage1(1)
        }

    }


}
