import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator'
    
class Loader extends React.Component{
    render(){
        return(
            <Card>
            <CardText style={{position: 'relative'}}>
            <RefreshIndicator
                size={40}
                left={-20}
                top={10}
                status={'loading'}
                style={{marginLeft: '50%'}}
            />
            </CardText>
            </Card>
        )
    }

}
