import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import DetailColorModal from './detail_color_modal';

class MultiColors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalContent: []
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.addModalListener = this.addModalListener.bind(this);
    }

    componentDidMount() {
        this.addModalListener();
    }

    handleOpenModal(content) {
        this.setState({
            showModal: true,
            modalContent: content
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    addModalListener() {
        let colors = document.querySelectorAll('.colors-sub-container > li');
        colors.forEach((color) => {
            color.addEventListener('click', () => {
                this.handleOpenModal(color.textContent);
            });
        });
    }


    render() {
        const colors = this.props.colors;
        return(     
            <div className="colors-mock-container">
                <Modal
                    isOpen={this.state.showModal}
                    className="modal"
                    contentLabel="Color Detail View"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    overlayClassName="overlay">
                    <DetailColorModal
                        modalContent={this.state.modalContent}
                    />
                </Modal>
                <ul className="colors-sub-container">
                    {colors.slice(0, this.props.numWindows).map((color, idx) => (
                        <li
                            key={idx}>
                            <div
                                className="indv-color"
                                style={{ background: color.value }}>
                            </div>
                            <div>
                                {color.value}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MultiColors;