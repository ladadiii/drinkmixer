import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Window 2.2

Window {
    id: mainn
    visible: true
    width: 800
    height: 480
    title: qsTr("Hello World")


    LoginPage{
        id:loginpage
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
    }

    HomePage{
        id:homepage
        anchors.fill: parent
        anchors.centerIn: parent
        visible: true

        onClosepage: {
            // 2 == menu button pressed
            // 1 == voice button pressed
            // 3 == configure

            homepage.visible = false

            if(trigger === 1)
                voice.visible =true
            if(trigger === 2)
                selectmenupage.visible = true
            if(trigger === 3)
                configurepage.visible = true
        }
    }

    MenuPage{
        id:selectmenupage
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
        onClosepage: {
            selectmenupage.visible = false

            if(trigger === 1)
                homepage.visible = true
        }
        onOpenpage: {
            if(num === 1)
                addmenupage.visible = true
            if(num === 2)
                waitpage.visible = true

        }

    }

    AddMenu{
        id:addmenupage
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
        onClosepage1: {
            addmenupage.visible = false
            if(trigger === 1)
                selectmenupage.visible = true
        }

    }

    Voice{
        id:voice
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
        onClosepage1: {

            voice.visible = false

            if(trigger === 1)
                homepage.visible = true
        }

    }

    ConfigurePage{
        id: configurepage
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
        onClosepage: {
            configurepage.visible = false

            if(trigger === 1)
                homepage.visible = true
        }

        onOpenpage: {
            configurepage.visible = false

            if(num === 1)
                addbottlelist.visible = true
            if(num === 2)
                loadedbottles.visible = true
        }


    }

    AddBottleList{
        id: addbottlelist
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
        onClosepage: {
            addbottlelist.visible = false

            if(trigger === 1)
                configurepage.visible = true
        }

    }

    LoadedBottles{
        id: loadedbottles
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
        onClosepage: {
            loadedbottles.visible = false

            if(trigger === 1)
                configurepage.visible = true
        }
    }

    WaitPage{
        id:waitpage
        anchors.fill: parent
        anchors.centerIn: parent
        visible: false
        onOpenpage: {
            waitpage.visible = false

            if(num === 1)
                selectmenupage.visible = true
        }
    }






}
