import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.3
//import QtQuick.Controls 2.1

Item {

    signal closepage(var trigger)
    signal openpage(var num)




    Button {
        id: add
        x: 521
        y: 18
        text: qsTr("Add menu")
        onClicked: {
            console.log("add")
            openpage(1)
        }

    }

    Button{
        x: 8
        y: 8
        text: "back"
        onClicked: {
            console.log("back")
            closepage(1)
        }

    }


    ScrollView{
        x: 163
        y: 103
        width: 312
        height: 256
        ListView {
            id: listview
            keyNavigationWraps: false
            spacing: 5
            orientation: ListView.Vertical
            anchors.rightMargin: 375
            anchors.bottomMargin: 0
            anchors.leftMargin: 13
            anchors.topMargin: 13
            anchors.fill: parent
            model: model1
            focus: true
            currentIndex: 0
            highlight: Rectangle { color: "lightsteelblue"; radius: 5 }
            highlightFollowsCurrentItem: true
            //SelectionMode: "single"


            delegate:Component {
                id: viewMenu
                Item {
                    width: 180; height: 40
                    Column {
                        spacing: 2
                        Text { text: '<b>Name:</b> ' + name }
                    }

                    MouseArea{
                        anchors.fill: parent
                        onClicked:listview.currentIndex = index
                    }
                }

            }

            //onCurrentItemChanged: console.log(model1.get(listview.currentIndex).name + ' selected')


        }

    }



    ListModel {
        id: model1
        ListElement {
            name: "mango orange"
        }
        ListElement {
            name: "melon"
        }
        ListElement {
            name: "apple iced tea"
        }
        ListElement {
            name: "lemon iced tea"
        }
        ListElement {
            name: "pineapple"
        }
        ListElement {
            name: "orange"
        }
        ListElement {
            name: "pineapple"
        }
        ListElement {
            name: "orange"
        }
    }

    Label {
        id: label
        x: 94
        y: 58
        width: 189
        height: 42
        text: qsTr("Select your drink:")
        font.pointSize: 16
        lineHeight: 3.2
    }

    function post(){
        console.log("getmenu")

        var link = "http://localhost:8080/getmenu"
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
            "menu": model1.get(listview.currentIndex).name
        }));


    }

    Button {
        id: button
        x: 294
        y: 393
        width: 104
        height: 45
        text: qsTr("Select Drink")
        onClicked: {
            openpage(2)
            console.log(model1.get(listview.currentIndex).name)
            post()

        }
    }


}
