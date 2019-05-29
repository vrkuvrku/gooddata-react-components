// (C) 2019 GoodData Corporation
import * as React from "react";
import Button from "@gooddata/goodstrap/lib/Button/Button";
import { InjectedIntl } from "react-intl";
import { getTranslation } from "../../../../utils/translations";

export interface ICustomColorButtonProps {
    onClick: () => void;
    intl: InjectedIntl;
}

export default class CustomColorButton extends React.PureComponent<ICustomColorButtonProps> {
    public render() {
        return (
            <div className="gd-color-drop-down-custom-section">
                <Button
                    value={getTranslation("gs.color-dropdown.custom-color", this.props.intl)}
                    className="button-link gd-color-drop-down-custom-section-button s-custom-section-button"
                    onClick={this.onClick}
                />
            </div>
        );
    }

    private onClick = () => {
        this.props.onClick();
    };
}