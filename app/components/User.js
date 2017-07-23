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
                <form action="/api/user" method="post">
                    {/*<label>*/}
                    {/*Name:*/}
                    <input type="text" name="firstname" placeholder="first name"/>
                    <input type="text" name="have" placeholder="have"/>
                    <input type="text" name="need" placeholder="need"/>
                    <div></div>
                    <input type="text" name="street" placeholder="Street"/>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="state" placeholder="State"/>
                    {/*</label>*/}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
});

