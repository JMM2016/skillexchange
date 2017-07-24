// Include React as a dependency
import React from 'react';

// Create the Main component
export default React.createClass({

    getInitialState() {
        return {};
    },

    // Our render method. Utilizing a few helper methods to keep this logic clean
    render() {
        return (
            <div>
                <form action="/api/update/" method="put">
                    <input type="text" name="have" placeholder="have"/>
                    <br/>
                    <input type="text" name="need" placeholder="need"/>
                    <br/>
                    <input type="text" name="street" placeholder="Street"/>
                    <br/>
                    <input type="text" name="city" placeholder="City"/>
                    <br/>
                    <input type="text" name="state" placeholder="State"/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
});

