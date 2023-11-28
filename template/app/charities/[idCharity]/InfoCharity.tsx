import ListContributor from "@/app/charities/[idCharity]/listContributor";

export default function InfoCharity() {
    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link-green active fw-bold" id="about-table" data-bs-toggle="tab" data-bs-target="#about-table-pane" type="button" role="tab" aria-controls="about-table-pane" aria-selected="true">About</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link-green fw-bold" id="update-tab" data-bs-toggle="tab" data-bs-target="#update-tab-pane" type="button" role="tab" aria-controls="update-tab-pane" aria-selected="false">Updates <label style={{padding: '0.005rem 0.25rem', fontSize: '0.67rem'}} className="btn btn-sm btn-danger">1</label></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link nav-link-green fw-bold" id="contributor-tab" data-bs-toggle="tab" data-bs-target="#contributor-tab-pane" type="button" role="tab" aria-controls="contributor-tab-pane" aria-selected="false">Contributors <label style={{padding: '0.005rem 0.25rem', fontSize: '0.67rem'}} className="btn btn-sm btn-danger">1</label></button>
                </li>
            </ul>
            <div className="tab-content mt-4 m-3" id="myTabContent">
                <div className="tab-pane fade show active" id="about-table-pane" role="tabpanel" aria-labelledby="about-table">
                    A crowdfund for direct Solana donations to certified non-profits continuing the earthquake relief effort in Turkey. Contributions are routed directly to İhtiyaç Haritası, a social platform cooperative that is certified to recieve donations and use them to support those in need. The beneficiary wallet has been certified by Turkiye Relief DAO, as well as the official Solana twitter account.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores autem commodi cum, dolores eius harum iste itaque minima odio, placeat, possimus quibusdam quisquam reiciendis saepe tempore vel vitae voluptatem.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim, error expedita explicabo impedit inventore itaque, maxime modi officiis provident quae saepe tenetur veniam. Commodi dolorum et tempore voluptatibus. Vero?
                </div>
                <div className="tab-pane fade" id="update-tab-pane" role="tabpanel" aria-labelledby="update-tab">...</div>
                <div className="tab-pane fade" id="contributor-tab-pane" role="tabpanel" aria-labelledby="contributor-tab">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 p-3">
                            <ListContributor price="0.1" address="42yULuEbDeMUsAz7BTAM" time="1701024051" />
                        </div>
                        <div className="col-lg-4 col-sm-12 p-3">
                            <ListContributor price="0.1" address="42yULuEbDeMUsAz7BTAM" time="1701024051" />
                        </div>
                        <div className="col-lg-4 col-sm-12 p-3">
                            <ListContributor price="0.1" address="42yULuEbDeMUsAz7BTAM" time="1701024051" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}