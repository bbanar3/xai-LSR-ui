import React from 'react';
import './App.css';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import pad_image_1 from "./color_2d_plot1.png";
import pad_image_2 from "./color_2d_plot2.png";
import image_architecture from "./figure_with_LSR.png";
import ReactAudioPlayer from 'react-audio-player';
import { ImageBackground} from "react-native";



var metric1 = 301;
var metric2 = 301;
var metric3 = 151;
var metric4 = 151;

var source_pianoroll_file_name = "test_midi_original.png";
var source_mp3_file_name = "test_midi_original.mp3";


function DisplayMetrics(props){
  return (
      <h1 className = 'display_metrics'> Metrics {props.m1} {props.m2} {props.m3} {props.m4} </h1>
  );

};

function TextInput(props){
  return (
      <h1 className = 'text_input'> Input MIDI </h1>
  );

};

function TextOutputVariations(props){
  return (
      <h1 className = 'text_output_variations'> Output MIDI (Input Variations) </h1>
  );

};

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
          <circle cx={metric1-10} cy={metric2-10} r="20"/>
        </svg>
      </ImageBackground>
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
          <circle cx={metric3-10} cy={metric4-10} r="20" />
        </svg>
      </ImageBackground>
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

function ImageComponentArchitecture(props){
  return (
    <div className="image_architecture">
      <img src={props.name} width="943" height="264" />
    </div>
  );

};

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

function ImageComponentSourceMusic(props){
  return (
    <div className="image_source_music">
      <img src={`${process.env.PUBLIC_URL}/pianoroll_files/` + props.name} width="550" height="192" />
      
    </div>
  );
};

function ImageComponentGeneratedMusic(props){  
  return (
    <div className="image_generated_music">
      <img src={`${process.env.PUBLIC_URL}/pianoroll_files/` + props.name} width="550" height="192" />
    </div>
  );
};

function Audio_Player_Source(props){
  var mp3_file_name = props.name;
  
  return (
    <ReactAudioPlayer
        className = "audio_player_source"
        src = {mp3_file_name}
        controls
    />
  );
}

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


function App() {
  
  return (
    <div className="App">
      <Audio_Player_Source name = {"./mp3_files/" + source_mp3_file_name} />
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
      <ImageComponentSourceMusic name = {source_pianoroll_file_name}/>
      
      <TextInput/>
      <TextOutputVariations/>

      
    </div>
  );
}

export default App;
