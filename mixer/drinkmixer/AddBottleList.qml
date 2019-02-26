import QtQuick 2.5
import QtQuick.Controls 1.4


Item {

    signal closepage(var trigger)



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
        x: 436
        y: 279
        text: qsTr("Add bottles to list")
        onClicked: {
            post()
            textField.text = ""

        }
    }

    TextField {
        id: textField
        x: 259
        y: 167
        text: qsTr("Text Field")
    }

    Label {
        id: label
        x: 142
        y: 181
        text: qsTr("Name of bottle:")
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

            "name": textField.text


        }));


    }


    Button {

        x: 142
        y: 279
        text: qsTr("View bottle list")
        onClicked: {
            get()
        }
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

            }
        }
        xhr.send(JSON.stringify({
        }));


    }
}
