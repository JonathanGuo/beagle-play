import { ActionHandler } from "@zup-it/beagle-web";

interface CustomAction {
  _beagleAction_: "custom:CustomAction";
  msg: string;
}

export const customHandler: ActionHandler<CustomAction> = ({ action }) => {
  /*
    We can access our parameter defined on the interface, for example, action.msg brings us the msg value.
  */
  alert(action.msg);
};
