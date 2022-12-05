import axios from 'axios';
import React, {useState, useEffect} from 'react';
import useEmber from '../utils/useEmber';

const PokemonCards = ({name, image, species}) => {
    const toggle = useEmber((state)=>state.toggleOpen);
    const getOpen = useEmber((state)=>state.isOpen);
    const [introduction, setIntroduction] = useState([]);

    useEffect(() => {
        fetchFlavorText();
    }, []);

    const fetchFlavorText = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${species}`).then((res)=>{
            console.log(res.data.flavor_text_entries[0].flavor_text);
            setIntroduction(res.data.flavor_text_entries[0].flavor_text);
        })
    };

    return(
        <>
            <div className="col-3 mt-3 listcards">
                <div className="card" onClick={toggle}>
                    <img className="card-img-top" src={image} alt={name}/>
                    <div className="card-body">
                        <p className="card-text text-center font-weight-bold text-capitalize">{name}</p>
                    </div>
                    {
                        getOpen ? (
                            <div className="card-body">
                                <p className="card-text">{introduction}</p>
                            </div>
                        ) : ""
                    }
                </div>
            </div>
        </>
    );
};

export default PokemonCards;