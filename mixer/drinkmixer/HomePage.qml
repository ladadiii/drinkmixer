import QtQuick 2.5
import QtQuick.Controls 1.4

Item {

    id:home

    signal closepage(var trigger)

    Rectangle{
        anchors.fill: parent
        color:"lightgrey"
    }

    Button {
        id: voice
        x: 211
        y: 178
        width: 98
        height: 53
        text: qsTr("Voice")
        onClicked: {
            closepage(1)
        }

    }


    Button {
        id: menu
        x: 470
        y: 178
        width: 98
        height: 53
        text: qsTr("Menu")
        onClicked: {
            closepage(2)
        }
    }

    Button {
        id: button
        x: 342
        y: 302
        width: 104
        height: 48
        text: qsTr("Configure Bottles")
        onClicked: {
            closepage(3)
        }
    }





}
