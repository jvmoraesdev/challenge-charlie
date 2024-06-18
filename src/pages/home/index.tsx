import React from "react";
import config from '../../config/config'

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home - {config.APP_NAME}</h1>
        </div>
    )
}

export default Home;