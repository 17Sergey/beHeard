import { connect } from "react-redux/es/exports";
import { compose } from "redux";

import WithAuthRedirect from "../../../hoc/WithAuthRedirect";
import { addMessage } from "../../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
}

export default compose( connect(mapStateToProps, { addMessage }), WithAuthRedirect )(Dialogs);
