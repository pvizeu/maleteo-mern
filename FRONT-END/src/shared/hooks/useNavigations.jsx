
import {  useLocation,useHistory} from "react-router-dom";
export function useNavigations(pagina){
    let history=useHistory();
    let location=useLocation();
    console.log(JSON.stringify(location));
    let {navigation} ={...location.state};
    console.log(`useNavigation >>>>>>>>>>PAGINA ${pagina} >>>`,history.length);
    console.log("navigation>>>>",navigation);
    return {history,location,navigation};
  }
  