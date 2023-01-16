// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("Module.test", "xui.Module")
                .setHost(host,"module_test1")
            );
            
            append(
                xui.create("Module.test", "xui.Module")
                .setHost(host,"module_test4")
            );
            
            append(
                xui.create("Module.test", "xui.Module")
                .setHost(host,"module_test5")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput30")
                .setLeft("8.380952380952381em")
                .setTop("2.9714285714285715em")
                .setWidth("20.571428571428573em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setLabelSize("8em")
                .setLabelCaption("Number Input")
                .setType("number")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput45")
                .setLeft("8.380952380952381em")
                .setTop("2.9714285714285715em")
                .setWidth("29.714285714285715em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setLabelSize("8em")
                .setLabelCaption("Number Input")
                .setType("number")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});