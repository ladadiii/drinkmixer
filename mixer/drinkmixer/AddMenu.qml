import QtQuick 2.5
import QtQuick.Controls 1.4

Item {
    id: add


    signal closepage1(var trigger)
    Component.onCompleted: get()
    property var list2: []



    Rectangle{
        anchors.fill: parent
        color:"lightgrey"
        anchors.rightMargin: 1
        anchors.bottomMargin: 0
        anchors.leftMargin: 1
        anchors.topMargin: 1
    }

    TextField {
        id: ml
        x: 489
        y: 112
        text: qsTr("ml")
    }

    TextField {
        id: ml1
        x: 489
        y: 163
        text: qsTr("ml")
    }

    TextField {
        id: ml2
        x: 489
        y: 217
        text: qsTr("ml")
    }

    TextField {
        id: ml3
        x: 489
        y: 255
        text: qsTr("ml")
    }

    TextField {
        id: ml4
        x: 489
        y: 301
        text: qsTr("ml")
    }

    TextField {
        id: ml5
        x: 489
        y: 349
        text: qsTr("ml")
    }

    Label {
        id: label6
        x: 459
        y: 122
        text: qsTr("ml")
    }

    Label {
        id: label7
        x: 459
        y: 170
        text: qsTr("ml")
    }

    Label {
        id: label8
        x: 459
        y: 220
        text: qsTr("ml")
    }

    Label {
        id: label9
        x: 459
        y: 264
        text: qsTr("ml")
    }

    Label {
        id: label10
        x: 459
        y: 310
        text: qsTr("ml")
    }

    Label {
        id: label11
        x: 459
        y: 352
        text: qsTr("ml")
    }

    TextField {
        id: textField
        x: 257
        y: 39
        text: qsTr("Name of drink")
    }

    Label {
        id: label
        x: 194
        y: 126
        text: qsTr("ingredient 1:")
    }

    ComboBox {
        id: bot
        x: 274
        y: 112
        currentIndex: 0
        model: list2
    }

    Label {
        id: label1
        x: 194
        y: 177
        text: qsTr("ingredient 2:")
    }

    ComboBox {
        id: bot1
        x: 274
        y: 163
        currentIndex: 0
        model: list2
    }

    Label {
        id: label2
        x: 194
        y: 223
        text: qsTr("ingredient 3:")
    }

    ComboBox {
        id: bot2
        x: 274
        y: 209
        currentIndex: 0
        model: list2
    }

    Label {
        id: label3
        x: 194
        y: 269
        text: qsTr("ingredient 4:")
    }

    ComboBox {
        id: bot3
        x: 274
        y: 255
        currentIndex: 0
        model: list2
    }

    Label {
        id: label4
        x: 194
        y: 315
        text: qsTr("ingredient 5:")
    }

    ComboBox {
        id: bot4
        x: 274
        y: 301
        currentIndex: 0
        model: list2
    }

    Label {
        id: label5
        x: 194
        y: 361
        text: qsTr("ingredient 6:")
    }

    ComboBox {
        id: bot5
        x: 274
        y: 347
        currentIndex: 0
        model: list2
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

    Button{
        x: 511
        y: 418
        text: "Add drink menu"
        onClicked: {
            console.log("added to db")
            console.log(textField.text)
            console.log(bot.currentText + ml.text)
            console.log(bot1.currentText + ml1.text)
            console.log(bot2.currentText + ml2.text)
            console.log(bot3.currentText + ml3.text)
            console.log(bot4.currentText + ml4.text)
            console.log(bot5.currentText + ml5.text)
            //post()
        }
    }

    function post(){
        console.log("sample")

        var link = "http://localhost:8080/bottlelist"
        var xhr = new XMLHttpRequest()
        xhr.open("POST",link,true);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function (){
            if(xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.responseText)
                var response = JSON.parse(xhr.responseText)

            }
        }
        xhr.send(JSON.stringify({
                                     "name": textField.text,
                                    "bottlelist_idBottleList": bot.get(currentIndex).text,
                                    "ml":ml.text,
                                    "bottlelist_idBottleList1": bot1.get(currentIndex).text,
                                    "ml":ml1.text,
                                    "bottlelist_idBottleList2": bot2.get(currentIndex).text,
                                    "ml":ml2.text,
                                    "bottlelist_idBottleList3": bot3.get(currentIndex).text,
                                    "ml":ml3.text,
                                    "bottlelist_idBottleList4": bot4.get(currentIndex).text,
                                    "ml":ml4.text,
                                    "bottlelist_idBottleList5": bot5.get(currentIndex).text,
                                    "ml":ml5.text
        }));


    }

    function get(){
        console.log("sample add menu")

        var link = "http://localhost:8080/getlist"
        var xhr = new XMLHttpRequest()
        xhr.open("GET",link,true);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function (){
            if(xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.responseText)
                var response = JSON.parse(xhr.responseText)
                list2 = response.message

            }
        }
        xhr.send(JSON.stringify({
        }));


    }

}


