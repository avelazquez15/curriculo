import {CopyBlock, github} from "react-code-blocks";
import React from "react";


function GitStyling({Command, CommandColor= null, Message='', MessageColor= null  }){
  const darkBlueColor = 'rgb(0, 0, 102)';
  const defaultStyling = {fontSize: "small", color: "Orange"};
  const getCommandStyling = (e) => {

    if(e === "commit -m"){
      return (
        <p>
          <b style={defaultStyling}>
            $ <i>git {e}  </i>
          </b>
          <b style={{color: (MessageColor? MessageColor: darkBlueColor)}}>
            "{ Message }"
          </b>
        </p>
      );
    }
    else if (e === "push"){
      defaultStyling['color'] = CommandColor? CommandColor: defaultStyling['color'] ;
      return (<p>
                <b style={defaultStyling}>
                  $ <i>git push</i>
                </b>
              </p>);
    }
  }

  return(
     getCommandStyling(Command, CommandColor, Message, MessageColor)
  );
}

export  default GitStyling;