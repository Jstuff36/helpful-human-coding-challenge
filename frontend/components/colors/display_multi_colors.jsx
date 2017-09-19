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
    }

    handleOpenModal(content) {
        return () => {
            this.setState({
                showModal: true,
                modalContent: content
            });
        };
    }

    handleCloseModal() {
        this.setState({ showModal: false });
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
                        handleCloseModal={this.handleCloseModal}
                    />
                </Modal>
                <ul className="colors-sub-container">
                    {colors.slice(0, this.props.numWindows).map((color, idx) => (
                        <li
                            onClick={this.handleOpenModal(color.value)}
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