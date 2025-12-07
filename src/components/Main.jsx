export default function Main(props) {
    const {data} = props
    return (
        <div className="ImageContainer">
            <img src={data.hdurl} alt={data.title || "backimage"} className="bgImage"/>
        </div>
    )
}