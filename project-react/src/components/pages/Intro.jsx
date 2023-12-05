import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Intro = () => {
  let showPass = true
  const clickHandler = () => {
    console.log("Estoy aquí")
    showPass = !showPass
    console.log(showPass)
  }
  return (
    <div className="card text-center">
      <div className="card-header bg-white mb-3">
        <h3>Inicio de sesión</h3>
      </div>
      <form>
        <div className="row mb-3">
          <div className="col-sm-12">
            <input className="form-control" type="text" placeholder="Nombre de usuario" id="userText" ></input>
          </div>
        </div>
        <div className="row mb-3">
            <div className="input-group col-sm-12">
                <input className="form-control" type="password" placeholder="Contraseña" id="passwordText"></input>
                <span onClick={clickHandler} className="input-group-text" id="basic-addon2">
                    { showPass ? <VisibilityIcon></VisibilityIcon> : <VisibilityOffIcon></VisibilityOffIcon> }
                </span>
            </div>
        </div>
      </form>
      <div className="footer"></div>
    </div>
  );
};

export default Intro;
