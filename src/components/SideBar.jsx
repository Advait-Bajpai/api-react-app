export default function SideBar(props) {
    const {showModal,handleToggleModal,data} = props 
    return (
        <div className="SideBar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarcontent">

            <h2>{data?.title}</h2>
            <div className="descriptionContainer">
                <p className="descriptionTitle">{data?.date}</p>
                <p>{data?.explaination}</p>
            </div>
            <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}