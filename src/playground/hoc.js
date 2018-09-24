//hoc is a higher order component that render another component.
// resuse code
// abstract state
// Render hijacking
import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
<div>
<h1>Info</h1>
<p>The info is :{props.info}</p>
</div>);

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>( 
    <div>
       {props.isAdmin && <p>This is Private Info ! plase don't share it.</p>}
       <WrappedComponent {...props}/>
    </div>
    ); 
    };
const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please Login to see details.</p>)}
        
        </div>
    );
};

const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info=" These are details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={OES_texture_half_float_linear} info=" These are details"/>,document.getElementById('app'));