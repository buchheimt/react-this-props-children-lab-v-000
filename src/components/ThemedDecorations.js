import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithClassNameProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {className: this.props.theme});
    })
    return(
      <div>
        {childrenWithClassNameProp}
      </div>
    );
  }
}

export default ThemedDecorations
