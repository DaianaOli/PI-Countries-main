import  "../../styles/smCountry.css";

export const SmallCountry = ({name, flags, id}) => {

    return (
        <div>
            <div>
                <img className='imgContainers' src={flags} alt='img'/>
                <p className='text'>{name}</p>
                <p>{id}</p>
                
            </div>
        </div>
    )
}