import ProgressBarComponents from "@/app/components/progressBarComponents";
import CharitieForm from "@/app/charities/[idCharity]/CharitieForm";
import InfoCharity from "@/app/charities/[idCharity]/InfoCharity";

export default function Charities({ params }: { params: { idCharity: string } }) {
    console.log(params.idCharity)
    return (
        <>
            <div className="m-lg-5 row">
                <div className="col-lg-8 col-sm-12">
                    <div style={{width: '100%', maxWidth: '99%', position: 'relative', boxSizing: 'border-box', padding: '16px'}}>
                        <figure style={{boxShadow: '10px 10px 20px 20px #ebfbee', boxSizing: 'border-box', display: 'block', margin: '0px'}}>
                            <div style={{boxSizing: 'border-box', position: 'relative'}}><img src="https://i.imgur.com/DNs5fZW.jpg" style={{objectFit: 'cover', width: '100%', maxHeight: '575px', boxSizing: 'border-box', borderStyle: 'none', verticalAlign: 'middle', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', display: 'block', border: '0px none rgb(0, 0, 0)', borderRadius: '8px'}} /></div>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CharitieForm />
                </div>
                <div className="col-lg-8 col-sm-12 mt-5">
                    <InfoCharity />
                </div>
            </div>
        </>
    )
}