/**
 * Created by eric on 2017/11/28.
 */
import React, {Component} from "react";
import "./ReactAlertPopup.css"
import WarningIcon from "./assets/warning.png"
// import ErrorIcon from "../../assets/error.png"
import LocalizedStrings from "./local/LocalizedStrings";

class ReactAlertPopup extends Component {

  constructor(props) {
    super(props);

    this.state = {show:false,showConfirmButton:true,showCancelButton:false,type:"warning",buttonPaddingTop:15};
  }

  componentWillReceiveProps(props) {
    if (props.show === false && this.state.show === false) {
      return;
    }
    let type = "warning";
    // if (props.type === "error") {
    //   type = props.type;
    // }

    this.setState({show:props.show,showConfirmButton:props.showConfirmButton !== undefined?props.showConfirmButton:true,
      showCancelButton:props.showCancelButton !== undefined?props.showCancelButton:false,
      type:type,buttonPaddingTop: props.buttonPaddingTop !== undefined ? props.buttonPaddingTop:15});
  };

  onConfirm  = () => {
    this.setState({show:false});
    this.props.onConfirm();
  }

  onCancel  = () => {
    this.setState({show:false});
    this.props.onCancel();
  }
  render() {
    return (

      <div className='popup' hidden={!this.state.show}>
        <div className='popup_inner'>
          <div style={{marginTop:22}}>
          <img alt="" className="alert_image" src={WarningIcon}/>
          </div>

          <div className="alert_text"><h5>{this.props.text}</h5></div>
          <div className="text-nowrap" style={{paddingTop:this.state.buttonPaddingTop}}>
          <input type="button"
                 className="alert_btn"
                  onClick={this.onConfirm} value={LocalizedStrings.ok}/>
            <input type="button" style={{display:this.state.showCancelButton?'':'none',marginLeft:3}}
                    className="alert_btn"
                    onClick={this.onCancel} value={LocalizedStrings.cancel}/>
          </div>
        </div>
      </div>

    );
  }
}

export default ReactAlertPopup;