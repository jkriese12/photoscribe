import React from "react";

export default class Landing extends Component {
    render() {
        return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">PhotoScribe</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <span class="navbar-text"><a href="/login">Sign In</a></span>
            </div>
        </nav>
        );
    }
}  

export default Landing;

