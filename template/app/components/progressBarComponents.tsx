// "use client"
export default function ProgressBarComponents({rate}:any) {
    return (
        <>
            <div style={{boxSizing: 'border-box', position: 'relative', height: '8px', backgroundColor: 'rgb(233, 236, 239)', borderRadius: '4px', overflow: 'hidden'}}>
                <div style={{width: `${rate}%`, boxSizing: 'border-box', borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px', borderTopRightRadius: '4px', borderBottomRightRadius: '4px', position: 'absolute', top: '0px', bottom: '0px', left: '0px', height: '8px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: '#00ff01', transition: 'width 0.1s linear 0s', animation: '1s linear 0s infinite normal none running animation-1mos065', backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(45deg, #00ff01 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, #3fc66b 50%, #3fc66b 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0))'}}></div>
            </div>
        </>
    )
}