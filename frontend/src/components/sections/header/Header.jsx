import React from "react";
import ButtonIcon from "../../ui/buttonIcon/ButtonIcon";
import IconText from "../../icons/IconText";
import IconLink from "../../icons/IconLink";
import IconImage from "../../icons/IconImage";
import IconVideo from "../../icons/IconVideo";
import IconAudio from "../../icons/IconAudio";
import IconFile from "../../icons/IconFile";
import IconAdd from "../../icons/IconAdd";


const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a href="/">Abundance</a>
          </div>
          <nav class="addActions">
            <ButtonIcon IconComponent={IconText} label="AddText" pageroute="/addText" tooltip="Add Text"/>
            <ButtonIcon IconComponent={IconLink} label="AddLink" pageroute="/addLink" tooltip="Add Link"/>
            <ButtonIcon IconComponent={IconImage} label="AddImage" pageroute="/addImage" tooltip="Add Image"/>
            <ButtonIcon IconComponent={IconVideo} label="AddVideo" pageroute="/addVideo" tooltip="Add Video"/>
            <ButtonIcon IconComponent={IconAudio} label="AddAudio" pageroute="/addAudio" tooltip="Add Audio"/>
            <ButtonIcon IconComponent={IconFile} label="AddFile" pageroute="/addFile" tooltip="Add File"/>
            <ButtonIcon IconComponent={IconAdd} label="AddRSS" pageroute="/addRSS" tooltip="Add RSS"/>
            {/* <ButtonIcon IconComponent={IconAdd} label="AddAPI" pageroute="/addAPI" tooltip="Add API"/> */}
          </nav>
          {/* <nav className="systemActions">
            <ButtonIcon IconComponent={IconAdd} label="Search" pageroute="/search"/>
            <ButtonIcon IconComponent={IconAdd} label="Settings" pageroute="/settings"/>
            <ButtonIcon IconComponent={IconAdd} label="Logout" pageroute="/"/>
          </nav> */}
        </div>
      </header>
    </>
  );
};

export default Header;
