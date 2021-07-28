import React from 'react';
import './App.css';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import pad_image_1 from "./color_2d_plot1.png";
import pad_image_2 from "./color_2d_plot2.png";
import image_architecture from "./figure_with_LSR.png";
import ReactAudioPlayer from 'react-audio-player';
import { ImageBackground, TextPropTypes} from "react-native";
import { useState, useEffect } from 'react';


var metric1 = 151;
var metric2 = 151;
var metric3 = 151;
var metric4 = 151;

var source_pianoroll_file_name = "midi_1_1_5_5.png";
var source_mp3_file_name = "test_midi_original.mp3";

var original_page_width = 1920;
var original_page_height = 906;


var current_page_width = 0;
var current_page_height = 0;

var width_scale_coeff = 0;
var height_scale_coeff = 0;

// ******************************* General Material / Big Text / Headers **********************************************
function DisplayMetrics(props){
  return (
      <h1 className = 'display_metrics'> Metrics {props.m1} {props.m2} {props.m3} {props.m4} </h1>
  );

};

function TextInput(props){

  const text_input_style = {top: (250 * props.current_height / original_page_height) + 'px', 
                            left:(185 * props.current_width / original_page_width) + 'px',
                            font: (32 * props.current_width / original_page_width) + 'px Helvetica, Arial',
                            fontWeight: 'bold',
                            }

  return (
      <h1 className = 'text_input' style = {text_input_style}> Input MIDI </h1>  
  );

};

function TextOutputVariations(props){

  const text_output_style = {top: (250 * props.current_height / original_page_height) + 'px', 
                            left:(1425 * props.current_width / original_page_width) + 'px',
                            font: (32 * props.current_width / original_page_width) + 'px Helvetica, Arial',
                            fontWeight: 'bold',
                            }

  return (
    <h1 className = 'text_output_variations' style = {text_output_style}> Output MIDI (Input Variations) </h1>
  );

};

function ImageComponentArchitecture(props){
  const image_architecture_style = {top: (0 * props.current_height / original_page_height) + 'px', 
                                      left:(500 * props.current_width / original_page_width) + 'px',
                                      }
  return (
    <div className="image_architecture" style = {image_architecture_style}>
      <img src={props.name} width= {943 * props.current_width / original_page_width} height={264 * props.current_height / original_page_height} />
    </div>
  );

};

// ******************************* Pads **********************************************

class Pads extends React.Component{

  render(){
    return(
      <div>
        <Pad1/>
        <Pad2/>
      </div>
    );
  }

}

// ******************************* Pad 1**********************************************

class Pad1 extends React.Component {

  render() {
    return (
      <ReactCursorPosition className = "pad1"
       activationInteractionMouse={INTERACTIONS.CLICK}
      >
        {/* <ImageComponent /> */}
        <PositionLabel1 />
      </ReactCursorPosition>
      
    );
  }
}


const PositionLabel1 = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 300,
      height = 300
    } = {},
    isActive = false,
    isPositionOutside = false,
    position: {
      x = 0,
      y = 0
    } = {}
  } = props;

  if(isActive == true){    
    metric1 = x;
    metric2 = y;
  };

  return (
    <div className="pad1__label">
      <ImageBackground source = {pad_image_1} style={{width: '100%', height: '194%'}}>
        <UpdateGenMedia/>
        <DisplayMetrics m1 = {metric1} m2 = {metric2} m3 = {metric3} m4 = {metric4}/>
        <svg >
          <circle cx={metric1-10} cy={metric2-10} r="10" fill = 'red'/>
        </svg>
      </ImageBackground>
      <Pad1ActiveIndicator isActive = {isActive}/>
    </div>
  );
};


const ImageComponent = (props) => {
  return (
    <div className="imageDiv">
      <img src={pad_image_1} width="290" height="290" />
    </div>
  );

};

function Pad1ActiveIndicator(props){

  if (props.isActive == true){
    var active_text = 'On';
    var text_color = 'green';
  }
  else{
    var active_text = 'Off';
    var text_color = 'red';
  }

  return(
  <h1 className = 'pad1_active_indicator' style = {{color: text_color}}> Click on the Pad to Active: {active_text} </h1>
  );
}

// ******************************* Pad 2 **********************************************


function Pad2(props) {

  const pad2_style = {top: (350 * props.current_height / original_page_height) + 'px', 
                      left:(1000 * props.current_width / original_page_width) + 'px',
                      width: (300 * props.current_width / original_page_width) + 'px',
                      height: (300 * props.current_width / original_page_width) + 'px',
                      }

  return (
    <ReactCursorPosition className="pad2"
      activationInteractionMouse={INTERACTIONS.CLICK}
      style = {pad2_style}
    >
      <PositionLabel2 current_height = {props.current_height} current_width = {props.current_width}/>
      {/* <ImageComponent2 current_height = {props.current_height} current_width = {props.current_width}/> */}
    </ReactCursorPosition>
  );
}

const PositionLabel2 = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    isActive = false,
    isPositionOutside = false,
    position: {
      x = 0,
      y = 0
    } = {}
  } = props;

  if(isActive == true){
    metric3 = x / props.current_width * original_page_width;
    metric4 = y / props.current_width * original_page_width;
  };

  const pad2_background_image_style = {height: (289 * props.current_width / original_page_width) + 'px', 
                                      width:(289 * props.current_width / original_page_width) + 'px',
                                      }

  return (
    <div className="pad2__label">
      <ImageBackground source = {pad_image_2} style={pad2_background_image_style}>
        <UpdateGenMedia current_height = {props.current_height} current_width = {props.current_width}/>
        <DisplayMetrics m1 = {metric1} m2 = {metric2} m3 = {metric3} m4 = {metric4}/>
        <svg >
          <circle cx={metric3 - 10 * props.current_width / original_page_width} cy={metric4 - 10 * props.current_width / original_page_width} r={10 * props.current_width / original_page_width} fill = 'red'/>
        </svg>
      </ImageBackground>
      <Pad2ActiveIndicator isActive = {isActive} current_height = {props.current_height} current_width = {props.current_width}/>
    </div>
  );
};

const ImageComponent2 = (props) => {
  return (
    <div className="imageDiv2">
      <img src={pad_image_1} width="290" height="290" />
    </div>
  );

};

function Pad2ActiveIndicator(props){
  if (props.isActive == true){
    var active_text = 'On';
    var text_color = 'green';
  }
  else{
    var active_text = 'Off';
    var text_color = 'red';
  }

  const pad2_active_indicator_style = {top: (300 * props.current_height / original_page_height) + 'px', 
                                      left:(1015 * props.current_width / original_page_width) + 'px',
                                      font: (18 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                                      fontWeight: 'bold',
                                      color: text_color,
                                      }

  return(
    <h1 className = 'pad2_active_indicator' style = {pad2_active_indicator_style}> Click on the Pad to Active: {active_text} </h1>
  );
}



// ********************************* Small Helper Texts ********************************************

function X1_label(props) {
  const x1_label_style = {top: (650 * props.current_height / original_page_height) + 'px', 
                            left:(640 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }


  return (
    <h1 className = 'x1_label' style = {x1_label_style}> Rhythmic Complexity Level <br/> Latent Dimension = 0</h1>
  );
}

function Y1_label(props) {
  const y1_label_style = {top: (475 * props.current_height / original_page_height) + 'px', 
                            left:(480 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }

  return (
    <h1 className = 'y1_label' style = {y1_label_style}> Note Range Level <br/> Latent Dimension = 1</h1>
  );

}

function X2_label(props) {
  const x2_label_style = {top: (650 * props.current_height / original_page_height) + 'px', 
                            left:(1060 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  
  return (
    <h1 className = 'x2_label' style = {x2_label_style}>Note Density Level <br/> Latent Dimension = 2</h1>
  );
}

function Y2_label(props){
  const y2_label_style = {top: (475 * props.current_height / original_page_height) + 'px', 
                            left:(860 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  
  return (
    <h1 className = 'y2_label' style = {y2_label_style}>Average Pitch Interval Level <br/> Latent Dimension = 3</h1>
  );
}

function Pad1_X0(props) {
  const pad1_x0_style = {top: (640 * props.current_height / original_page_height) + 'px', 
                            left:(590 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  return (
    <h1 className = 'pad1_x0' style = {pad1_x0_style} >0</h1>
  );
}

function Pad1_X1(props) {
  const pad1_x1_style = {top: (640 * props.current_height / original_page_height) + 'px', 
                            left:(900 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  return (
    <h1 className = 'pad1_x1' style = {pad1_x1_style}>10</h1>
  );
}

function Pad1_Y1(props) {
  const pad1_y1_style = {top: (320 * props.current_height / original_page_height) + 'px', 
                            left:(580 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  return (
    <h1 className = 'pad1_y1' style = {pad1_y1_style}>10</h1>
  );
}

function Pad2_X0(props) {
  const pad2_x0_style = {top: (640 * props.current_height / original_page_height) + 'px', 
                            left:(990 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  return (
    <h1 className = 'pad2_x0' style = {pad2_x0_style}>0</h1>
  );
}

function Pad2_X1(props) {
  const pad2_x1_style = {top: (640 * props.current_height / original_page_height) + 'px', 
                            left:(1300 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  return (
    <h1 className = 'pad2_x1' style = {pad2_x1_style}>10</h1>
  );
}

function Pad2_Y1(props) {
  const pad2_y1_style = {top: (320 * props.current_height / original_page_height) + 'px', 
                            left:(980 * props.current_width / original_page_width) + 'px',
                            font: (16 * props.current_width / original_page_width) + 'px/1.5 Helvetica, Arial',
                            fontWeight: 'bold',
                            }
  return (
    <h1 className = 'pad2_y1' style = {pad2_y1_style}>10</h1>
  );
}

// ************************************** Source Music Pianoroll and Audio Material ****************************************

function ImageComponentSourceMusic(props){
  const image_source_music_style = {top: (370 * props.current_height / original_page_height) + 'px', 
                                    left:(-20 * props.current_width / original_page_width) + 'px',
                                    }

  return (
    <div className="image_source_music" style = {image_source_music_style}>
      <img src={`${process.env.PUBLIC_URL}/pianoroll_files/` + props.name} width={550 * props.current_width / original_page_width} height={192 * props.current_height / original_page_height} />
    </div>
  );
};

function Audio_Player_Source(props){
  var mp3_file_name = props.name;
  const audio_player_source_style = {top: (600 * props.current_height / original_page_height) + 'px', 
                                    left:(55 * props.current_width / original_page_width) + 'px',
                                    width: (400 * props.current_width / original_page_width) + 'px',
                                    height: (50 * props.current_width / original_page_width) + 'px'}
  
  return (
    <ReactAudioPlayer
        className = "audio_player_source"
        src = {mp3_file_name}
        controls
        style = {audio_player_source_style}
    />
  );
}

// ************************************** Generated Music Pianoroll and Audio Material ****************************************
function ImageComponentGeneratedMusic(props){  
  const image_generated_music_style = {top: (370 * props.current_height / original_page_height) + 'px', 
                                      left:(1350 * props.current_width / original_page_width) + 'px',
                                      }

  return (
    <div className="image_generated_music" style = {image_generated_music_style}>
      <img src={`${process.env.PUBLIC_URL}/pianoroll_files/` + props.name} width={550 * props.current_width / original_page_width} height={192 * props.current_height / original_page_height} />
    </div>
  );
};

function Audio_Player_Generated(props){
  const audio_player_generated_style = {top: (600 * props.current_height / original_page_height) + 'px', 
                                    left:(1430 * props.current_width / original_page_width) + 'px',
                                    width: (400 * props.current_width / original_page_width) + 'px',
                                    height: (50 * props.current_width / original_page_width) + 'px'}
  return (
    <ReactAudioPlayer
        className = "audio_player_generated"
        src = {`${process.env.PUBLIC_URL}/mp3_files/` + props.name}
        controls
        style = {audio_player_generated_style}
    />
  );
}

function UpdateGenMedia(props){

  var metric1_quantized = Math.floor(metric1 / 30); 
  var metric2_quantized = Math.floor(metric2 / 30); 
  var metric3_quantized = Math.floor(metric3 / 30); 
  var metric4_quantized = Math.floor(metric4 / 30); 

  var gen_pianoroll_file_name = "midi_" + metric1_quantized + "_" + metric2_quantized + "_" + metric3_quantized + "_" + metric4_quantized +".png";

  var gen_mp3_file_name = "midi_" + metric1_quantized + "_" + metric2_quantized + "_" + metric3_quantized + "_" + metric4_quantized + ".mp3";

  return(
    <div className = "updateGenMedia">
      <ImageComponentGeneratedMusic name = {gen_pianoroll_file_name} current_height = {props.current_height} current_width = {props.current_width}/>
      <Audio_Player_Generated name = {gen_mp3_file_name} current_height = {props.current_height} current_width = {props.current_width}/>
    </div>
  );
}

// ************************************** App ****************************************

class CreateContact extends React.Component {
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  
  current_page_width = this.state.windowWidth;
  current_page_height = this.state.windowHeight;

  render() {
    return (
      <div>
        {/* <Pad1 /> */}
        <Pad2 current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>


        <X1_label current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Y1_label current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <X2_label current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Y2_label current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Pad1_X0 current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Pad1_X1 current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Pad1_Y1 current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Pad2_X0 current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Pad2_X1 current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <Pad2_Y1 current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>

        <Audio_Player_Source name = {"./mp3_files/" + source_mp3_file_name} current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <ImageComponentSourceMusic name = {source_pianoroll_file_name} current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>

        <TextInput current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <TextOutputVariations current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>

        <ImageComponentArchitecture name = {image_architecture} current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>

      </div>
    );
  }
}


function App() {
  
  return (
    <div className="App">
      {/* <Pads/> */}
      <CreateContact />
    </div>
  );
}

export default App;


