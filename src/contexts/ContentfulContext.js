import React from "react";
import contentful from '../contentful'

const ContentfulContext = React.createContext();

function withContentful(Component) {
    return function ConnectedComponent(props) {
      return (
        <ContentfulContext.Consumer>
          {contentful => <Component {...props} contentful={contentful} />}
        </ContentfulContext.Consumer>
      );
    };
  }
  class ContentfulStore extends React.Component {
    state = {
        contentful : new contentful()
    };
  
    render() {
      return (
        <ContentfulContext.Provider value={this.state.contentful}>
          {this.props.children}
        </ContentfulContext.Provider>
      );
    }
  }

  export { ContentfulContext, withContentful, ContentfulStore }