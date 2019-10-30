import React from 'react';

class Modal extends React.Component {
  render() {
    const { buttonsConfig, renderScene } = this.props;
    return (
      <div style={{ padding: 40, backgroundColor: '#FF9671', borderRadius: 8 }}>
        {renderScene()}
        <div
          style={{
            display: 'flex',
            justifyContent:
              buttonsConfig.length > 1 ? 'space-between' : 'flex-end',
            marginTop: 30
          }}
        >
          {buttonsConfig.map(button => {
            return (
              <button
                style={{ height: 40, fontSize: 16 }}
                onClick={button.onClick}
              >
                {button.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Modal;
