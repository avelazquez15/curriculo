/* react */
import React, { useState }  from 'react';

/* material ui imports */
import Container from '@mui/material/Container';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

/* 3rd party components */
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

/* internal reusable components*/
import GitStyling from "../components/gitStyling";

/* static items*/
import ProfileImage from '../static/images/AlejandroVelazquez.jpg';
import Logo from "../static/images/logo.svg";
import '../static/css/vertical-timeline.css'

function TimelinePage(){

  /* default colors for page */
  const goldColor = 'rgb(255,215,0)';
  const darkBlueColor = 'rgb(0, 0, 102)';
  const skyBlue = 'rgb(229,239,255)';

  /* page styling */
  const mainDivStyling = {  backgroundImage: "url("+Logo+")",
                            backgroundColor: skyBlue,
                            backgroundRepeat: "repeat",
                            backgroundPosition: "right top" };

  const goldBluePatternStyling = { background: goldColor, color: darkBlueColor };
  const blueGoldPatternStyling = { background: darkBlueColor, color: goldColor };

  const headerContainerStyling = { textAlign: "left", height: "fit-content", paddingTop: "2%", paddingBottom: "15%" };
  const headerTitleStyling = { textAlign: "center", paddingBottom: "2%" };
  const headerImageDivStyling = { width: "35%", float: "left", borderRadius: "50%", overflow: "hidden" };

  /* hyperlinks */
  const googleTranslateLink = "https://translate.google.com/?sl=la&tl=en&text=curriculo&op=translate&hl=en";

  const pageHeader = () => {
    return (
      <Container maxWidth="lg"  style={headerContainerStyling} >

        {/* header title */}
        <h1  style={headerTitleStyling}> Welcome To My Curriculo Project 👨🏻‍💻 </h1>

        {/* header content */}
        <div>

           {/* profile image floating left */}
          <div style={headerImageDivStyling}>
            <img src={ProfileImage} style={{maxWidth: "140%"}} />
          </div>

          {/* profile abstract to the right of profile image*/}
          <div style={{paddingLeft: "40%", lineHeight: "25px"}}>
            <p>
              I use Curriculo to document (<b style={{color: "rgb(230, 149, 0)"}}>"git" commit/push</b>) and share many of
              my proud career accomplishments with the world.
            </p>
            <p>
              Curriculo in <i>Latin</i> translates to Career. <br/>
              <b>Source</b>: <a href={googleTranslateLink} target={"_blank"}> <i>Google Translate</i>  </a>
            </p>
          </div>

        </div>
    </Container>
    );
  }

  const timelineCardHeader = ({Title="", Company="", Location=""}) => {
    return (  <p>
                <h3 className="vertical-timeline-element-title">{Title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{Company}</h4>
                <h4 className="vertical-timeline-element-subtitle">{Location}</h4>
              </p>);
  }

  const timelineCardHeaderAlt = ({Title="", Subtitles="", Company="", Location=""}) => {
    return (  <p>
                <h3 className="vertical-timeline-element-title">{Title}</h3>
                { Array.isArray(Subtitles) ?
                    Subtitles.map( (title) => {
                                              return <h3 className="vertical-timeline-element-subtitle">{title}</h3>
                                            }) : <h3 className="vertical-timeline-element-subtitle">{Subtitles}</h3>
                 }
                <h4 className="vertical-timeline-element-subtitle">{Company}</h4>
                <h4 className="vertical-timeline-element-subtitle">{Location}</h4>
            </p>);
  }

  const careerTimeline = () => {
    return(
      <VerticalTimeline  className={"vertical-timeline-custom-line"} >
        {/* Element 0 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - Present"
          iconStyle={goldBluePatternStyling}
          icon={ <MoreVertIcon/>  }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Sr. Software Engineer",
                                                        Company: "Talis Biomedical Inc.",
                                                        Location: "San Francisco, CA" })}

          <GitStyling Command={"commit -m"} Message={ "Full stack engineer developing cloud native solutions to meet " +
                                                      "business and software requirements." } />
          <GitStyling Command={"push"} />
        </VerticalTimelineElement>

        {/* Element 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={blueGoldPatternStyling}
          icon={ <DoneOutlineIcon/> }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Software Engineer",
                                                        Company: "Talis Biomedical Inc.",
                                                        Location: "San Francisco, CA" })}

          <GitStyling Command={"commit -m"} Message={ "Designed, lead, and implemented an analytical data pipeline to " +
                                                      "ingest diagnostic telemetry information." } />
          <GitStyling Command={"commit -m"} Message={ "Contributed to the embedded firmware system written in (C) for " +
                                                      "the TalisOne product." } />
          <GitStyling Command={"push"} />
        </VerticalTimelineElement>

        {/* Element 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={goldBluePatternStyling}
          icon={ <DoneOutlineIcon/>  }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Software Consultant",
                                                        Location: "Fremont, CA" })}

          <GitStyling Command={"commit -m"} Message={ "Developed a FAFCO Inc. proprietary software to estimate the " +
                                                      "performance of a distribution of Photovoltaic (PV) Solar Panels " +
                                                      "given a list of input parameters such as a customer ZIP code, " +
                                                      "panels' orientation, wind speed, etc. The model then determined a " +
                                                      "30 year performance of the system to generate a Sales' report " +
                                                      "estimating the financial ROI, energy savings/cost, and many other " +
                                                      "variables."} />
          <GitStyling Command={"commit -m"} Message={ "Deployed software model into a Cloud based environment for " +
                                                      "multi-user access through a webapp."} />
          <GitStyling Command={"push"} />
        </VerticalTimelineElement>

        {/* Element 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={blueGoldPatternStyling}
          icon={ <DoneOutlineIcon/> }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Master's in Computer Engineering",
                                                        Company: "University of California Davis",
                                                        Location: "Davis, CA" })}

          <GitStyling Command={"commit -m"} Message={ "Published a Master's thesis titled \"Low Energy Probe Design for " +
                                                      "Restoring the Sense of Bladder Fullness\"."} />
          <GitStyling Command={"commit -m"} Message={ "Manufactured low energy probe design and programmed with embedded " +
                                                      "firmware to make biomedical device functional to sense bladder " +
                                                      "fullness."} />
          <GitStyling Command={"commit -m"} Message={ "Integrated biomedical device into an iOS application using  " +
                                                      "Bluetooth Low Energy technology to notify patients of their bladder " +
                                                      "fullness."} />
          <GitStyling Command={"push"} />
        </VerticalTimelineElement>

        {/* Element 4 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={goldBluePatternStyling}
          icon={ <DoneOutlineIcon/> }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Software Developer",
                                                        Company: "FAFCO, INC.",
                                                        Location: "Chico, CA" })}

          <GitStyling Command={"commit -m"} Message={ "Deployed production-ready software for Engineering, Sales, " +
                                                      "and Manufacturing departments."} />
          <GitStyling Command={"commit -m"} Message={ "Streamlined many Manufacturing processes by integrating " +
                                                      "software automation solutions into operational workflows."} />
          <GitStyling Command={"push"} />
        </VerticalTimelineElement>

        {/* Element 5 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={blueGoldPatternStyling}
          icon={ <DoneOutlineIcon/>  }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Bachelor of Science in Electrical Engineering",
                                                        Company: "California State University Chico",
                                                        Location: "Chico, CA" })}

          <GitStyling Command={"commit -m"} Message={ "With my knowledge as an Electrical Engineer I was able to " +
                                                      "develop a \"Smart Bluetooth LE MPPT Meter\" whose purpose was " +
                                                      "to extract the most efficient performance from a Photovoltaic " +
                                                      "(PV) Solar Panel by implementing a Maximum Power Point Tracking " +
                                                      "(MPPT) system and delivering both analytical and visual " +
                                                      "information to an iOS application over Bluetooth Low Energy (BLE)."}  />
          <GitStyling Command={"commit -m"} Message={ "Published a research paper titled \"Demonstration Of A Noble All " +
                                                      "Optical D-Type Flip Flop System For High Speed Data Processing\""} />
          <GitStyling Command={"commit -m"} Message={ "Initiated into the Tau Beta Pi Honor Society where this " +
                                                      "membership is only offered to students who are within the top " +
                                                      "5th percent of their respective class."} />
          <GitStyling Command={"commit -m"} Message={ "Accepted into California State University Chico!"} />
          <GitStyling Command={"push"} />
        </VerticalTimelineElement>

        {/* Element 6 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2014"
          iconStyle={goldBluePatternStyling}
          icon={ <DoneOutlineIcon/>  }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Software Engineering Intern",
                                                        Company: "FAFCO INC.",
                                                        Location: "Chico, CA" })}


          <GitStyling Command={"commit -m"} Message={ "First exposure to production-ready software. Internship experience " +
                                                      "motivated and inspired me to pursue my dreams of growing " +
                                                      "into a leading professional software engineer."}  />
          <GitStyling Command={"commit -m"} Message={ "Landed my first internship!"} />
          <GitStyling Command={"push"} />
        </VerticalTimelineElement>

        {/* Element 7 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2013"
          iconStyle={blueGoldPatternStyling}
          icon={ <DoneOutlineIcon/>  }
          iconOnClick={ (e) => {} }

          > {timelineCardHeaderAlt({  Title: "Associate's of Science in;",
                                                                  Subtitles: ["Computer Science", "Mathematics"],
                                                                  Company: "Yuba College",
                                                                  Location: "Marysville, CA" })}


          <GitStyling Command={"commit -m"} Message={ "Adds Associates of Science degrees to project."} />
          <GitStyling Command={"commit -m"} Message={ "Received the prestigious Engineering Math and Physics (EMP) award. " +
                                                      "EMP is awarded to the most outstanding class graduate."} />
          <GitStyling Command={"commit -m"} Message={ "Learned fundamentals of Mathematics and Computer Science domains."}/>

          <GitStyling Command={"push"} />


        </VerticalTimelineElement>

        {/* Element 8 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009"
          iconStyle={goldBluePatternStyling}
          icon={ <MoreHorizIcon/>  }
          iconOnClick={ (e) => {} }

          > {timelineCardHeader({ Title: "Curriculo Project Created"} )}

          <GitStyling Command={"commit -m"} Message={"Initial commit of Curriculo project."} />
          <GitStyling Command={"push"} />

        </VerticalTimelineElement>
    </VerticalTimeline>);
  }

  return (
    <div style={mainDivStyling}>
      { pageHeader() }
      { careerTimeline() }
    </div>
  );
}

export default TimelinePage;