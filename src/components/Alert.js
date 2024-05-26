import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{
            height: '50px'
        }}>

            {props.alert && <div className={`alert alert-${capitalize(props.alert.type)} alert-dismissible fade show`} role="alert" style={{
                backgroundColor: props.mode === 'dark' ? '#282a38' : '#fff3cd',
                color: props.mode === 'dark' ? 'white' : '#856404',
                border: props.mode === 'dark' ? '1px solid #856404' : '1px solid #ffc107'
            }}>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                {/* <button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close" style={{
                backgroundColor: props.mode==='dark'?'#856404':'#ffc107',
            }}></button> */}
            </div>}
        </div>
    )
}
