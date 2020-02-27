import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingIndicator(props) {
    return (
        <div className="loading-indicator" style={{display: 'block', textAlign: 'center', marginTop: '20%'}}>
            <CircularProgress/>
        </div>
    );
}