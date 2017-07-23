var React = require("react");

import GoogleApiComponent from '../../utils/Map/GoogleApiComponent'

export class Container extends React.Component {
    render() {

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }

        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div>
            <div>Map will go here</div>
                <div style={style}><Map google={this.props.google} /></div>
            </div>
        )
    }
}

export default GoogleApiComponent({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(Container)