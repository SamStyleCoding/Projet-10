import {useState} from "react";
import {useDispatch} from "react-redux";
import putUserData from "../api/putUserData.jsx";
import {useNavigate} from "react-router-dom";

function EditProfil({data, token}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [update, setUpdate] = useState("");
    const [userName, setUserName] = useState("");

    const updateProfil = () => {
        setUpdate(!update);
    };

    const handleSubmit= (e) => {
        e.preventDefault();

        dispatch( putUserData({ token, userName }))
          .then(() => {
            setUpdate(false)
            navigate('/profil');
          })
          .catch((err) => console.error(err));
    }


    if (!update) {
        return (
            <div>
                <h1>{data.userName}</h1>
                <button className="edit-button" onClick={updateProfil}>Edit Name</button>
            </div>
        )
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <div className="input-name">
                    <input 
                    type="text" 
                    placeholder={data.userName} 
                    autoComplete="username"
                    name="username" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="button-name">
                    <button type="submit" value="Save" className="edit-button">Save</button>
                    <button type="button" className="edit-button" onClick={updateProfil}>Cancel</button>
                </div>
            </form>
        )
    }

}

export default EditProfil;