import React, {Fragment} from 'react';

export const H3Head = (props) => {
    return(
        <Fragment>
            <h3 className="headline">{props.children}</h3>
            <span className="line margin-bottom-30"></span>
            <div class="clearfix"></div>
        </Fragment>
    )
}