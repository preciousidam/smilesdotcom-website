import {Spin} from 'antd';


export const Loader = _ => {
    return (
        <div 
            id="loader" 
            style={{
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
        >
            <Spin size="large" />
        </div>
    )
}