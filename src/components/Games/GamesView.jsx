import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const GamesView = (props) => {

    return (
        <div
            style={{
                backgroundImage: `url(${require('./images/crwd-bg.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container">
                <div><a href="#">Back home</a> </div>
                <Card>
                    <Typography variant="h4">
                        WAR SHIP RELOADED
                    </Typography>
                    <Typography variant="subtitle2">
                        Services and issue tracking down no High page performance improvements in Blocks are loaded
                    </Typography>
                </Card>
            </div>
        </div>
    );
}

export default GamesView;