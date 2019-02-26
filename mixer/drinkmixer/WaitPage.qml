import QtQuick 2.5
import QtQuick.Controls 1.4

Item {

        signal openpage(var num)

    Rectangle{
        anchors.fill: parent
        color:"lightgrey"
        Text {
            x: 208
            y: 195
            text: qsTr("please wait while your drink is being prepared")
        }
    }

    Button{
        x: 269
        y: 296
        text: "select another drink"
        onClicked: {
            console.log("another drink")
            openpage(1)
        }

    }


}
