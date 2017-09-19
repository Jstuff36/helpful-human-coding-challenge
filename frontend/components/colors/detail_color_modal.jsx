import React from 'react';

class DetailColorModal extends React.Component {
    constructor(props) {
        super(props);

        this.lightenDarkenColor = this.lightenDarkenColor.bind(this);
    }
    
    // taken from and greatly modified from https://css-tricks.com/snippets/javascript/lighten-darken-color/
    lightenDarkenColor(col, scale) {

        let usePound = false;
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
        
        let num = parseInt(col, 16);
        
        let r = (num >> 16);

        let r_diff = scale > 0 ? (255 - r) / 255 * scale + r : r + (scale / r); 


        if (r_diff > 255) {
            r_diff = 255;
        } else if (r_diff < 0) {
            r_diff = 0;
        }

        let b = ((num >> 8) & 0x00FF);

        let b_diff = scale > 0 ? (255 - b) / 255 * scale + b : b + (scale / b); 


        if (b_diff > 255) {
            b_diff = 255;
        } else if (b_diff < 0) {
            b_diff = 0;
        } 

        let g = (num & 0x0000FF);

        let g_diff = scale > 0 ? (255 - g) / 255 * scale + g : g + (scale / g); 

        if (g_diff > 255) {
            g_diff = 255;
        } else if (g_diff < 0) {
            g_diff = 0;
        } 

        let hexValue = (g_diff | (b_diff << 8) | (r_diff << 16)).toString(16);

        while (hexValue.length < 6) {
            hexValue = '0' + hexValue;
        }
        
        return (usePound ? "#" : "") + hexValue;

    }

    render() {
        let color = this.props.modalContent;
        
        return(
            <div className="modal-container">
                <div>
                    <div
                        className="modal-tile-color"
                        style={{ background: color }}>
                    </div>
                    <div className="modal-tile-text">
                        <div>
                            {color}
                        </div>
                    </div>
                </div>
                <ul className="color-shades-list-container">
                    <li className="color-shades-container">
                        <div
                            className="color-shades"
                            style={{ background: this.lightenDarkenColor(color, -15000) }}>
                        </div>
                        <div className="color-shades-text">
                            <div>
                                {this.lightenDarkenColor(color, -15000)}
                            </div>
                        </div>
                    </li>
                    <li className="color-shades-container">
                        <div
                            className="color-shades"
                            style={{ background: this.lightenDarkenColor(color, -8000) }}>
                        </div>
                        <div className="color-shades-text">
                            <div>
                                {this.lightenDarkenColor(color, -8000)}
                            </div>
                        </div>
                    </li>
                    <li className="color-shades-container">
                        <div
                            className="color-shades"
                            style={{ background: color }}>
                        </div>
                        <div className="color-shades-text">
                            <div>
                                {color}
                            </div>
                        </div>
                    </li>
                    <li className="color-shades-container">
                        <div
                            className="color-shades"
                            style={{ background: this.lightenDarkenColor(color, 100) }}>
                        </div>
                        <div className="color-shades-text">
                            <div>
                                {this.lightenDarkenColor(color, 100)}
                            </div>
                        </div>
                    </li>
                    <li className="color-shades-container">
                        <div
                            className="color-shades"
                            style={{ background: this.lightenDarkenColor(color, 200) }}>
                        </div>
                        <div className="color-shades-text">
                            <div>
                                {this.lightenDarkenColor(color, 200)}
                            </div>
                        </div>
                    </li>
                </ul>
                <button 
                    onClick={this.props.handleCloseModal}
                    className="close-modal-button">
                    <div>
                        Close
                    </div>
                </button>
            </div>
        );
    }
}

export default DetailColorModal;