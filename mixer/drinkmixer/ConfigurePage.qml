import QtQuick 2.5
import QtQuick.Controls 1.4

Item {
    signal closepage(var trigger)
    signal openpage(var num)


    Button{
        x: 8
        y: 8
        text: "back"
        onClicked: {
            console.log("back")
            closepage(1)
        }

    }

    Button {
        id: button
        x: 154
        y: 220
        text: qsTr("Add Bottles to List")
        onClicked: {
            console.log("bot list")
            openpage(1)
        }
    }

    Button {
        id: button1
        x: 401
        y: 220
        text: qsTr("Load Bottles")
        onClicked: {
            console.log("load")
            openpage(2)
        }
    }


}
