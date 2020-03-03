import React from 'react';

function AddUserBody(props) {
    return(
            <div>       
                <form>
                    <label >
                        {props.body[0].name}
                    </label>
                    <input 
                        type={props.body[0].type} 
                        value={(props.payload && props.payload[props.body[0].name]) || ''}
                        onChange={props.changeHandler(props.body[0].name)}
                        />
                </form>
                <form>
                    <label required className="required" >
                        {props.body[1].name}
                    </label>
                    <input 
                        type={props.body[1].type} 
                        value={(props.payload && props.payload[props.body[1].name]) || ''} 
                        placeholder={props.body[1].placeholder} 
                        onChange={props.changeHandler(props.body[1].name)}
                        required
                        />
                </form>
                <form>
                    <label >
                        {props.body[2].name}
                    </label>
                    <input 
                        type={props.body[2].type} 
                        value={(props.payload && props.payload[props.body[2].name]) || ''}
                        onChange={props.changeHandler(props.body[2].name)}
                        />
                </form>
            </div>
        );
}

export default AddUserBody;