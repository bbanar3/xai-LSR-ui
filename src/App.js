import React from 'react';
import './App.css';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import pad_image_1 from "./color_2d_plot1.png";
import pad_image_2 from "./color_2d_plot2.png";
import image_architecture from "./figure_with_LSR.png";
import ReactAudioPlayer from 'react-audio-player';
import { ImageBackground} from "react-native";
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
  return (
    <div className="image_architecture">
      <img src={props.name} width="943" height="264" />
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


class Pad2 extends React.Component {
  render() {
    return (
      <ReactCursorPosition className="pad2"
       activationInteractionMouse={INTERACTIONS.CLICK}
      >
        <PositionLabel2 />
        {/* <ImageComponent2 /> */}
      </ReactCursorPosition>
    );
  }
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
    metric3 = x;
    metric4 = y;
  };

  return (
    <div className="pad2__label">
      <ImageBackground source = {pad_image_2} style={{width: '100%', height: '194%'}}>
        <UpdateGenMedia/>
        <DisplayMetrics m1 = {metric1} m2 = {metric2} m3 = {metric3} m4 = {metric4}/>
        <svg >
          <circle cx={metric3-10} cy={metric4-10} r="10" fill = 'red'/>
        </svg>
      </ImageBackground>
      <Pad2ActiveIndicator isActive = {isActive}/>
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

  return(
    <h1 className = 'pad2_active_indicator' style = {{color: text_color}}> Click on the Pad to Active: {active_text} </h1>
  );
}



// ********************************* Small Helper Texts ********************************************

class X1_label extends React.Component {
  render() {
    return (
      <h1 className = 'x1_label' > Rhythmic Complexity Level <br/> Latent Dimension = 0</h1>
    );
  }
}

class Y1_label extends React.Component {
  render() {
    return (
      <h1 className = 'y1_label' >Note Range Level <br/> Latent Dimension = 1</h1>
    );
  }
}

class X2_label extends React.Component {
  render() {
    return (
      <h1 className = 'x2_label'>Note Density Level <br/> Latent Dimension = 2</h1>
    );
  }
}

class Y2_label extends React.Component {
  render() {
    return (
      <h1 className = 'y2_label'>Average Pitch Interval Level <br/> Latent Dimension = 3</h1>
    );
  }
}

class Pad1_X0 extends React.Component {
  render() {
    return (
      <h1 className = 'pad1_x0'>0</h1>
    );
  }
}

class Pad1_X1 extends React.Component {
  render() {
    return (
      <h1 className = 'pad1_x1'>10</h1>
    );
  }
}

class Pad1_Y1 extends React.Component {
  render() {
    return (
      <h1 className = 'pad1_y1'>10</h1>
    );
  }
}

class Pad2_X0 extends React.Component {
  render() {
    return (
      <h1 className = 'pad2_x0'>0</h1>
    );
  }
}

class Pad2_X1 extends React.Component {
  render() {
    return (
      <h1 className = 'pad2_x1'>10</h1>
    );
  }
}

class Pad2_Y1 extends React.Component {
  render() {
    return (
      <h1 className = 'pad2_y1'>10</h1>
    );
  }
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
                                    left:(100 * props.current_width / original_page_width) + 'px',
                                    }
  
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
  return (
    <ReactAudioPlayer
        className = "audio_player_generated"
        src = {`${process.env.PUBLIC_URL}/mp3_files/` + props.name}
        controls
    />
  );
}

function UpdateGenMedia(){

  var metric1_quantized = Math.floor(metric1 / 30); 
  var metric2_quantized = Math.floor(metric2 / 30); 
  var metric3_quantized = Math.floor(metric3 / 30); 
  var metric4_quantized = Math.floor(metric4 / 30); 

  var gen_pianoroll_file_name = "midi_" + metric1_quantized + "_" + metric2_quantized + "_" + metric3_quantized + "_" + metric4_quantized +".png";

  var gen_mp3_file_name = "midi_" + metric1_quantized + "_" + metric2_quantized + "_" + metric3_quantized + "_" + metric4_quantized + ".mp3";

  return(
    <div className = "updateGenMedia">
      <ImageComponentGeneratedMusic name = {gen_pianoroll_file_name}/>
      <Audio_Player_Generated name = {gen_mp3_file_name} />
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

        <Audio_Player_Source name = {"./mp3_files/" + source_mp3_file_name} current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>


        <ImageComponentSourceMusic name = {source_pianoroll_file_name} current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>

        <TextInput current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>
        <TextOutputVariations current_height = {this.state.windowHeight} current_width = {this.state.windowWidth}/>


      </div>
    );
  }
}


function App() {
  
  return (
    <div className="App">
      
      <Pads/>
      {/* <Pad1 />
      <Pad2 /> */}
      <X1_label />
      <Y1_label />
      <X2_label />
      <Y2_label />
      <Pad1_X0/>
      <Pad1_X1/>
      <Pad1_Y1/>
      <Pad2_X0/>
      <Pad2_X1/>
      <Pad2_Y1/>
      <ImageComponentArchitecture name = {image_architecture}/>
      
      
      

      <CreateContact />


      
    </div>
  );
}

export default App;
