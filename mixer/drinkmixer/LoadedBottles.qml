import QtQuick 2.5
import QtQuick.Controls 1.4

Item {
    signal closepage(var trigger)
    Component.onCompleted: get()
    property var list: []

    Button{
        x: 8
        y: 8
        text: "back"
        onClicked: {
            console.log("back")
            closepage(1)
        }

    }

    Label {
        id: label
        x: 186
        y: 78
        text: qsTr("Slot 1:")
    }

    Label {
        id: label1
        x: 186
        y: 119
        text: qsTr("Slot 2:")
    }

    Label {
        id: label2
        x: 186
        y: 160
        text: qsTr("Slot 3:")
    }

    Label {
        id: label3
        x: 186
        y: 198
        text: qsTr("Slot 4:")
    }

    Label {
        id: label4
        x: 186
        y: 239
        text: qsTr("Slot 5:")
    }

    Label {
        id: label5
        x: 186
        y: 279
        text: qsTr("Slot 6:")
    }

    ComboBox {
        id: comboBox
        x: 258
        y: 74
        model: list
    }

    ComboBox {
        id: comboBox1
        x: 258
        y: 115
        model: list
    }

    ComboBox {
        id: comboBox2
        x: 258
        y: 156
        model: list
    }

    ComboBox {
        id: comboBox3
        x: 258
        y: 194
        model: list
    }

    ComboBox {
        id: comboBox4
        x: 258
        y: 235
        model: list
    }

    ComboBox {
        id: comboBox5
        x: 258
        y: 275
        model: list
    }

    function get(){
        console.log("sample")

        var link = "http://localhost:8080/getlist"
        var xhr = new XMLHttpRequest()
        xhr.open("GET",link,true);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function (){
            if(xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.responseText)
                var response = JSON.parse(xhr.responseText)
                list = response.message

            }
        }
        xhr.send(JSON.stringify({
        }));


    }

}
